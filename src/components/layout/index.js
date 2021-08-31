import { Grid, Text, Link, Spacer, Divider } from '@geist-ui/react'
import { Github } from '@geist-ui/react-icons'

const Layout = ({ children }) => {
  return (
    <>
      <header style={{ width: 1000, margin: '0 auto' }}>
        <Grid.Container alignItems="center" justify="space-between">
          <Grid xs="12" alignItems="center" direction="row">
            <Link href="/" color="">
              <Text p b font="20px" className="logo">
                知晓云博客
              </Text>
            </Link>
            <Spacer w="2" />
            <Link href="https://cloud.minapp.com/" underline>
              <Text p>官网</Text>
            </Link>
            <Spacer w="1" />
            <Link href="https://cloud.minapp.com/dashboard/" underline>
              <Text p>控制台</Text>
            </Link>
            <Spacer w="1" />
            <Link href="https://doc.minapp.com/" underline>
              <Text p>文档</Text>
            </Link>
          </Grid>
          <Grid xs="6" justify="flex-end">
            <Link href="https://github.com/ifanrx">
              <Github />
            </Link>
          </Grid>
        </Grid.Container>
      </header>

      {children}

      <footer style={{ width: 1000, margin: '0 auto' }}>
        <Divider />
        <Grid.Container alignItems="center">
          <Grid xs="12" alignItems="center">
            <Link href="/">
              <Text p b font="18px">
                知晓云博客
              </Text>
            </Link>
            <Spacer w={1} />
            <Text p>© {new Date().getFullYear()} 知晓云。版权所有</Text>
          </Grid>
          <Grid xs="12" justify="flex-end">
            <Link href="https://cloud.minapp.com/" underline>
              <Text p>官网</Text>
            </Link>
            <Spacer w="1" />
            <Link href="https://cloud.minapp.com/dashboard/" underline>
              <Text p>控制台</Text>
            </Link>
            <Spacer w="1" />
            <Link href="https://cloud.minapp.com/dashboard/" underline>
              <Text p>文档</Text>
            </Link>
          </Grid>
        </Grid.Container>
        <Spacer h={10} />
      </footer>
    </>
  )
}

export default Layout
