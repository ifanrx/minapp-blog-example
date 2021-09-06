import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Grid, Spacer } from '@geist-ui/react'
import BaaS from 'minapp-sdk'
import moment from 'moment'
import Layout from '../../components/layout'
import BlogHeader from '../../components/blog-header'
import Comment from '../../components/comment'

const contentGroupId = 1630893238319930
const contentGroup = new BaaS.ContentGroup(contentGroupId)

const getArticle = async id => {
  const res = await contentGroup.getContent(id)
  return res.data
}

const Article = () => {
  const { id } = useParams()
  const [article, setArticle] = useState()

  useEffect(() => {
    const getArticleContent = async () => {
      const res = await getArticle(id)
      setArticle(res)
    }

    getArticleContent()
  }, [id])

  if (!article) return null

  return (
    <Layout>
      <BlogHeader
        title={article.title}
        subTitle={article.description}
        date={moment.unix(article.created_at).format('YYYY年M月D日')}
      />

      <article style={{ width: 1000, margin: '0 auto' }}>
        <Spacer h={5} />
        <Grid.Container direction="column">
          <Grid xs="24" direction="column">
            {article?.content && (
              <div dangerouslySetInnerHTML={{ __html: article?.content }}></div>
            )}
            <Spacer h={2} />
          </Grid>
        </Grid.Container>
        <Spacer h={5} />
      </article>

      <Comment />
    </Layout>
  )
}

export default Article
