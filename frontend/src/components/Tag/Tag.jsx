import './tag.css'

export default function Tag({tagStyle}) {
  return (
    <div className={`tag ${tagStyle.color}_tag`}>{tagStyle.text}</div>
  )
}
