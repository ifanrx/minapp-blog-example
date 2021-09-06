import React from 'react'
import { Grid, Text, Spacer } from '@geist-ui/react'
import moment from 'moment'

const BlogHeader = ({ title = '', subTitle = '', date }) => {
  return (
    <section style={{ background: 'rgb(245, 245, 245)' }}>
      <Grid.Container
        style={{ width: 1000, margin: '0 auto' }}
        direction="column"
      >
        <Spacer h={8} />
        <Grid xs="24" direction="column">
          <Text h1 font="56px">
            {title}
          </Text>

          {subTitle && (
            <Text p font="22px">
              {subTitle}
            </Text>
          )}

          {date && (
            <Text p font="18px" style={{ color: 'gray', marginTop: -10 }}>
              创建于{moment().format('YYYY年M月D日')}
            </Text>
          )}
        </Grid>
        <Spacer h={8} />
      </Grid.Container>
    </section>
  )
}

export default BlogHeader
