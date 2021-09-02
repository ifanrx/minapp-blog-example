import React, { useState, useEffect } from 'react'
import { Grid, Text, Link, Spacer } from '@geist-ui/react'
import { Plus } from '@geist-ui/react-icons'
import BaaS from 'minapp-sdk'
import Layout from '../../components/layout'

const blogTable = new BaaS.TableObject('blogs')

const Home = () => {
  const [blogList, setBlogList] = useState({})

  useEffect(() => {
    const getBlogs = async () => {
      // 获取文章数据
      const res = await blogTable.find()
      // 按类型分类
      const list = res.data.objects.reduce((final, article) => {
        if (!final[article.category]) {
          final[article.category] = []
        }

        final[article.category].push(article)
        return final
      }, {})
      setBlogList(list)
    }

    getBlogs()
  }, [])

  if (!Object.keys(blogList).length) return null

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
              知晓云博客
            </Text>
            <Text p font="20px">
              由知晓云强力驱动的 React 个人博客网站
            </Text>
          </Grid>
          <Spacer h={8} />
        </Grid.Container>
      </section>

      <section style={{ width: 1000, margin: '0 auto' }}>
        <Grid.Container direction="column">
          {Object.keys(blogList).map(category => {
            const articles = blogList[category]
            return (
              <Grid xs="24" direction="column" key={category}>
                <Spacer h={5} />
                <Text h4>{category}</Text>
                {articles.map(article => (
                  <Link
                    href={`/#/article/${article.id}`}
                    underline
                    key={article.id}
                  >
                    <Text h2 font="42px">
                      {article.title}
                    </Text>
                  </Link>
                ))}
              </Grid>
            )
          })}
        </Grid.Container>
        <Spacer h={5} />
      </section>

      <Link
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'fixed',
          bottom: 50,
          right: 50,
          width: 50,
          height: 50,
          color: '#fff',
          background: 'blue',
          borderRadius: '50%',
          cursor: 'pointer',
        }}
        href="/#/article/new"
      >
        <Plus />
      </Link>
    </Layout>
  )
}

export default Home
