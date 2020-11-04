import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Divider, DatePicker } from 'antd'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Row>
          <Col xs={12}>
            This is Next Page
            <a href="/">
              Go to home page
            </a>

            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>

              <Divider />
              <DatePicker placeholder="select date" />
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}


export async function getServerSideProps() {

  return {
    props: {
    },
  }
}
