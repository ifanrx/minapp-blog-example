import React, { useState } from 'react'
import Layout from '../../components/layout'
import {
  Grid,
  Text,
  Spacer,
  Textarea,
  Button,
  Input,
  useToasts,
} from '@geist-ui/react'
import BaaS from 'minapp-sdk'
import { useHistory } from 'react-router-dom'

const blogTable = new BaaS.TableObject('blogs')

const NewArticle = () => {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [content, setContent] = useState('')
  const [, setToast] = useToasts()
  const history = useHistory()

  const submit = async () => {
    if (!title || !category || !content) {
      setToast({ text: '请输入正确内容', type: 'error' })
      return
    }

    // 本地创建一条空记录
    const record = blogTable.create()
    try {
      // 这里为了更简单地展示录入，使用了匿名登录的方法。在实际的项目中，应采用用户名+密码等登录方式
      await BaaS.auth.anonymousLogin()
      await record.set({ title, category, content }).save()
      setToast({ text: '创建成功，正在为你跳转...', type: 'success' })
      setTimeout(() => {
        history.push('/')
      }, 2000)
    } catch (error) {
      setToast({ text: '创建失败！', type: 'error' })
    }
  }

  return (
    <Layout>
      <section style={{ background: 'rgb(245, 245, 245)' }}>
        <Grid.Container
          style={{ width: 1000, margin: '0 auto' }}
          direction="column"
        >
          <Spacer h={8} />
          <Grid xs="24" direction="column">
            <Text h1 font="56px">
              新增文章
            </Text>
          </Grid>
          <Spacer h={8} />
        </Grid.Container>
      </section>

      <section style={{ width: 1000, margin: '0 auto' }}>
        <Spacer h={5} />
        <Grid.Container direction="column">
          <Grid xs="24" direction="column">
            <Input
              placeholder="请输入文章标题"
              width="100%"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <Spacer h={1} />
          </Grid>
          <Grid xs="24" direction="column">
            <Input
              placeholder="请输入文章分类"
              width="100%"
              value={category}
              onChange={e => setCategory(e.target.value)}
            />
            <Spacer h={1} />
          </Grid>
          <Grid xs="24" direction="column">
            <Textarea
              placeholder="请输入文章内容..."
              height="300px"
              value={content}
              onChange={e => setContent(e.target.value)}
            />
          </Grid>
        </Grid.Container>
        <Spacer h={1} />
        <Button auto type="success" width="50px" onClick={submit}>
          提交
        </Button>
        <Spacer h={5} />
      </section>
    </Layout>
  )
}

export default NewArticle
