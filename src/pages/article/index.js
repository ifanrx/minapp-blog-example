import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Grid, Text, Spacer } from '@geist-ui/react'
import moment from 'moment'
import BaaS from 'minapp-sdk'
import Layout from '../../components/layout'

const blogTable = new BaaS.TableObject('blogs')

const Article = () => {
  const { id } = useParams()
  const [article, setArticle] = useState(null)

  useEffect(() => {
    const getArticle = async () => {
      const res = await blogTable.get(id)
      setArticle(res.data)
    }

    getArticle()
  }, [id])

  if (!article) return null

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
              {article.title}
            </Text>
            <Text p font="20px">
              {moment.unix(article.created_at).format('YYYY年M月D日')}
            </Text>
          </Grid>
          <Spacer h={8} />
        </Grid.Container>
      </section>

      <article style={{ width: 1000, margin: '50px auto' }}>
        <Grid.Container direction="column">
          {article.content.split('　　').map((item, index) => {
            console.log(item)
            return (
              <Grid xs="24" direction="column" key={index}>
                <Text p font="24px">
                  {item}
                </Text>
                <Spacer h={2} />
              </Grid>
            )
          })}
        </Grid.Container>
      </article>
    </Layout>
  )
}

export default Article
