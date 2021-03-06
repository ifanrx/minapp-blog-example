import React, { useState, useEffect } from 'react'
import { Grid, Text, Link, Spacer } from '@geist-ui/react'
import BaaS from 'minapp-sdk'
import Layout from '../../components/layout'
import BlogHeader from '../../components/blog-header'

const contentGroupId = 1630893238319930
const contentGroup = new BaaS.ContentGroup(contentGroupId)

/**
 * 获取内容库列表
 */
const getContentGroupList = async categoryId => {
  const query = new BaaS.Query()
  query.arrayContains('categories', [categoryId])

  const res = await contentGroup.setQuery(query).find()
  return res.data.objects
}

/**
 * 获取分类列表
 */
const getCategoryList = async () => {
  const res = await contentGroup.getCategoryList()
  return res.data.objects
}

const Home = () => {
  const [articles, setArticles] = useState()

  useEffect(() => {
    const getArticleList = async () => {
      const categoryList = await getCategoryList()

      const articleList = {}
      for (const category of categoryList) {
        const { name, id } = category
        const articles = await getContentGroupList(id)

        articleList[name] = articles
      }

      setArticles(articleList)
    }

    getArticleList()
  }, [])

  if (!articles) return null

  return (
    <Layout>
      <BlogHeader
        title="知晓云博客"
        subTitle="由知晓云强力驱动的 React 个人博客网站"
      />

      <section style={{ width: 1000, margin: '0 auto' }}>
        <Grid.Container direction="column">
          {Object.keys(articles).map(category => {
            const articleList = articles[category]
            return (
              <Grid xs="24" direction="column" key={category}>
                <Spacer h={5} />
                <Text h4>{category}</Text>
                {articleList.map(article => {
                  return (
                    <Link
                      href={`/article/${article.id}`}
                      underline
                      key={article.id}
                    >
                      <Text h2 font="42px">
                        {article.title}
                      </Text>
                    </Link>
                  )
                })}
              </Grid>
            )
          })}
        </Grid.Container>
        <Spacer h={5} />
      </section>
    </Layout>
  )
}

export default Home
