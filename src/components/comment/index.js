/* eslint-disable no-script-url */
import React, { useState } from 'react'
import {
  Grid,
  Spacer,
  Card,
  Text,
  Textarea,
  Button,
  Link,
  Modal,
  Input,
  useToasts,
} from '@geist-ui/react'

const Comment = () => {
  const [showModal, setShowModal] = useState(false)
  const [isRegister, setIsRegister] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [, setToast] = useToasts()

  /**
   * 关闭弹窗
   */
  const closeModal = event => {
    setShowModal(false)
    console.log('closed')
  }

  /**
   * 登录/注册弹窗提交
   */
  const onAccountSubmit = () => {
    if (!username) {
      setToast({ text: '请输入用户名', type: 'error' })
      return
    }

    if (!password) {
      setToast({ text: '请输入密码', type: 'error' })
      return
    }

    closeModal()
  }

  return (
    <div style={{ width: 1000, margin: '0 auto' }}>
      <Text h3>评论</Text>
      <Spacer h={1} />
      <Grid.Container direction="column">
        <Grid xs={24} direction="column">
          <Card width="100%">
            <div
              style={{ display: 'flex', alignItems: 'center', marginTop: -20 }}
            >
              <Text p b font="20px">
                小晓云
              </Text>
              <Spacer w={1} />
              <Text p style={{ color: 'gray' }}>
                2021/8/31 19:02:02
              </Text>
            </div>

            <Text p style={{ marginTop: -5 }}>
              所以， 那么， 这样看来，
              黑塞曾经说过，有勇气承担命运这才是英雄好汉。我希望诸位也能好好地体会这句话。
            </Text>
          </Card>
          <Spacer h={1} />
        </Grid>
        <Grid xs={24} direction="column">
          <Card width="100%">
            <div
              style={{ display: 'flex', alignItems: 'center', marginTop: -20 }}
            >
              <Text p b font="20px">
                达文西
              </Text>
              <Spacer w={1} />
              <Text p style={{ color: 'gray' }}>
                2021/8/31 19:02:02
              </Text>
            </div>

            <Text p style={{ marginTop: -5 }}>
              黑塞曾经说过，有勇气承担命运这地体会这句话。
            </Text>
          </Card>
          <Spacer h={1} />
        </Grid>
        <Grid xs={24} direction="column">
          <Card width="100%">
            <div
              style={{ display: 'flex', alignItems: 'center', marginTop: -20 }}
            >
              <Text p b font="20px">
                Lucy
              </Text>
              <Spacer w={1} />
              <Text p style={{ color: 'gray' }}>
                2021/8/31 19:02:02
              </Text>
            </div>

            <Text p style={{ marginTop: -5 }}>
              有勇气承担命运这才是英雄好汉。我希望诸位也能好好地体会这句话。
            </Text>
          </Card>
          <Spacer h={1} />
        </Grid>
      </Grid.Container>

      <Spacer h={1} />

      <Grid.Container direction="column">
        <Grid xs={24} alignItems="center">
          <Text p b font="20px">
            创建评论
          </Text>
          <Spacer w={1} />
          <Text p>
            你还没登录，请先
            <Link
              href="javascript: void(0);"
              color
              onClick={() => setShowModal(true)}
            >
              登录
            </Link>
            ，再评论
          </Text>
        </Grid>
        <Grid xs={24} direction="column">
          <Textarea
            disabled
            placeholder="请输入评论..."
            width="100%"
            height="300px"
          />
        </Grid>
        <Spacer h={1} />
        <Grid xs={24}>
          <Button disabled type="success-light" width="100%">
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
