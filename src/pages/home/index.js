import { Grid, Text, Link, Spacer } from '@geist-ui/react'
import React from 'react'
import Layout from '../../components/layout'
import BlogHeader from '../../components/blog-header'

const Home = () => {
  return (
    <Layout>
      <BlogHeader
        title="知晓云博客"
        subTitle="由知晓云强力驱动的 React 个人博客网站"
      />

      <section style={{ width: 1000, margin: '0 auto' }}>
        <Grid.Container direction="column">
          <Grid xs="24" direction="column">
            <Spacer h={5} />
            <Text h4>🥗 技术文章</Text>
            <Link href="/article/123" underline>
              <Text h2 font="42px">
                如何快速实现图片爬虫
              </Text>
            </Link>
            <Link href="/article/123" underline>
              <Text h2 font="42px">
                通过 React 构建个人博客教程
              </Text>
            </Link>
            <Link href="/article/123" underline>
              <Text h2 font="42px">
                怎样快速生成海报，并在小程序中分享
              </Text>
            </Link>
            <Link href="/article/123" underline>
              <Text h2 font="42px">
                如何生成带参数的二维码？
              </Text>
            </Link>
          </Grid>
          <Grid xs="24" direction="column">
            <Spacer h={5} />
            <Text h4>🍾 生活类文章</Text>
            <Link href="/article/123" underline>
              <Text h2 font="42px">
                如何快速实现图片爬虫
              </Text>
            </Link>
            <Link href="/article/123" underline>
              <Text h2 font="42px">
                通过 React 构建个人博客教程
              </Text>
            </Link>
            <Link href="/article/123" underline>
              <Text h2 font="42px">
                怎样快速生成海报，并在小程序中分享
              </Text>
            </Link>
            <Link href="/article/123" underline>
              <Text h2 font="42px">
                如何生成带参数的二维码？
              </Text>
            </Link>
          </Grid>
          <Grid xs="24" direction="column">
            <Spacer h={5} />
            <Text h4>🚁 我的相册</Text>
            <Link href="/article/123" underline>
              <Text h2 font="42px">
                如何快速实现图片爬虫
              </Text>
            </Link>
            <Link href="/article/123" underline>
              <Text h2 font="42px">
                通过 React 构建个人博客教程
              </Text>
            </Link>
            <Link href="/article/123" underline>
              <Text h2 font="42px">
                怎样快速生成海报，并在小程序中分享
              </Text>
            </Link>
            <Link href="/article/123" underline>
              <Text h2 font="42px">
                如何生成带参数的二维码？
              </Text>
            </Link>
          </Grid>
        </Grid.Container>
        <Spacer h={5} />
      </section>
    </Layout>
  )
}

export default Home
