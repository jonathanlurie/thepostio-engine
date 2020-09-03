import { Card } from 'antd'
import Link from 'next/link'
const { Meta } = Card


export default class PostCard extends React.Component {
  
  render() {
    const postMetadata = this.props.postMetadata.data

    if (this.props.postMetadata.error) {
      return (
        <div>
          ERROR, article not available.
        </div>
      )
    }

    return (
      
      <Card
      hoverable
      style={{ width: '100%'}}
      // cover={<img alt="example" src={postMetadata.cover} />}

      cover={
        <Link href={`/${postMetadata.username}/${postMetadata.postid}`}><a>
        <div
          style={{
            background: `url(${postMetadata.cover}) no-repeat center center`,
            backgroundSize: 'cover',
            height: 250,
          }}
        >
        </div>
        </a></Link>
      }


      extra={<Link href={`/${postMetadata.username}/${postMetadata.postid}`}><a>Read the article </a></Link>}
    >
      <Meta
        title={
          <Link href={`/${postMetadata.username}/${postMetadata.postid}`}><a style={{color: 'inherit', textDecoration: 'none'}}>
            {postMetadata.title}
          </a></Link>
        }
        description={postMetadata.excerpt}
      />
    </Card>
    
    )
  }
}