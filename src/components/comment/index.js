/* eslint-disable no-script-url */
import React, { useState, useEffect } from 'react'
import {
  Grid,
  Spacer,
  Card,
  Text,
  Textarea,
  Button,
  Modal,
  Input,
  useToasts,
} from '@geist-ui/react'
import BaaS from 'minapp-sdk'
import moment from 'moment'

const CommentTable = new BaaS.TableObject('comment')

const Comment = ({ id }) => {
  const [showModal, setShowModal] = useState(false)
  const [isRegister, setIsRegister] = useState(false)
  const [currentUser, setCurrentUser] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [comment, setComment] = useState('')
  const [commentList, setCommentList] = useState([])

  const [, setToast] = useToasts()

  useEffect(() => {
    getCurrentUser()
    getCommentList(id)
  }, [id])

  /**
   * 获取当前用户
   */
  const getCurrentUser = async () => {
    try {
      const user = await BaaS.auth.getCurrentUser()
      setCurrentUser(user)
    } catch (error) {
      if (error.code === 604) {
        console.log('用户未登录')
      }
    }
  }

  /**
   * 获取评论列表
   */
  const getCommentList = async id => {
    const query = new BaaS.Query()
    query.compare('article', '=', id)
    const res = await CommentTable.expand('created_by')
      .orderBy(['-created_at'])
      .setQuery(query)
      .find()
    setCommentList(res.data.objects)
  }

  /**
   * 关闭弹窗
   */
  const closeModal = () => {
    setShowModal(false)
  }

  /**
   * 提交评论
   */
  const onCommentSubmit = async () => {
    if (!comment) {
      setToast({ text: '请输入评论', type: 'error' })
      return
    }

    const commentRecord = CommentTable.create()

    try {
      await commentRecord.set({ comment, article: id }).save()
      getCommentList(id) // 新增后，我们需要刷新一下评论列表
      setComment('')
    } catch (error) {
      console.log('创建评论失败', error.toString())
      setToast({ text: '创建评论失败', type: 'error' })
      return
    }
  }

  /**
   * 登录/注册弹窗提交
   */
  const onAccountSubmit = async () => {
    if (!username) {
      setToast({ text: '请输入用户名', type: 'error' })
      return
    }

    if (!password) {
      setToast({ text: '请输入密码', type: 'error' })
      return
    }

    const request = isRegister ? BaaS.auth.register : BaaS.auth.login

    try {
      const user = await request({ username, password })
      setCurrentUser(user)
      closeModal()
    } catch (error) {
      console.log('登录/注册错误', error.toString())
      setToast({ text: error.toString(), type: 'error' })
    }
  }

  return (
    <div style={{ width: 1000, margin: '0 auto' }}>
      <Text h3>评论</Text>
      <Spacer h={1} />
      <Grid.Container direction="column">
        {commentList.map(comment => {
          return (
            <Grid xs={24} direction="column" key={comment.id}>
              <Card width="100%">
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: -20,
                  }}
                >
                  <Text p b font="20px">
                    {comment.created_by._username}
                  </Text>
                  <Spacer w={1} />
                  <Text p style={{ color: 'gray' }}>
                    {moment
                      .unix(comment.created_at)
                      .format('YYYY年M月D日 HH:mm:ss')}
                  </Text>
                </div>

                <Text p style={{ marginTop: -5 }}>
                  {comment.comment}
                </Text>
              </Card>
              <Spacer h={1} />
            </Grid>
          )
        })}
      </Grid.Container>

      <Spacer h={1} />

      <Grid.Container direction="column">
        <Grid xs={24} alignItems="center">
          <Text p b font="20px">
            创建评论
          </Text>
          <Spacer w={1} />
          {!currentUser && (
            <Text p>
              你还没登录，请先
              <Text
                span
                style={{ color: '#109cca', cursor: 'pointer' }}
                onClick={() => setShowModal(true)}
              >
                登录
              </Text>
              ，再评论
            </Text>
          )}
        </Grid>
        <Grid xs={24} direction="column">
          <Textarea
            disabled={!currentUser}
            placeholder="请输入评论..."
            width="100%"
            height="300px"
            value={comment}
            onChange={e => setComment(e.target.value)}
          />
        </Grid>
        <Spacer h={1} />
        <Grid xs={24}>
          <Button
            disabled={!currentUser}
            type="success-light"
            width="100%"
            onClick={onCommentSubmit}
          >
            提交
          </Button>
        </Grid>
      </Grid.Container>

      <Spacer h={4} />

      <Modal visible={showModal} onClose={closeModal}>
        <Modal.Title>{isRegister ? '注册' : '登录'}</Modal.Title>
        <Modal.Content>
          <Input
            placeholder="请输入用户名"
            width="100%"
            onChange={e => setUsername(e.target.value)}
          />
          <Spacer />
          <Input.Password
            placeholder="请输入密码"
            width="100%"
            onChange={e => setPassword(e.target.value)}
          />
          <Spacer />
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              cursor: 'pointer',
            }}
          >
            <Text
              span
              type="success"
              font="14px"
              onClick={() => setIsRegister(!isRegister)}
            >
              {isRegister ? '返回登录' : '没有账号？点这里注册'}
            </Text>
          </div>
        </Modal.Content>
        <Modal.Action passive onClick={() => setShowModal(false)}>
          取消
        </Modal.Action>
        <Modal.Action onClick={onAccountSubmit}>提交</Modal.Action>
      </Modal>
    </div>
  )
}

export default Comment
