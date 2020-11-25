import s from '../../styles/Tes.module.css'

const CustomMarker = (props) => {

  const { color, name, id } = props

  return (
    <svg width="64" height="64" style={{ width: '64px', height: '64px' }} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path width="64" height="64" style={{ width: '64px', height: '64px' }} fill-rule="evenodd" clip-rule="evenodd" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9zm2.5 0a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z" fill={color} fill-opacity=".54" />
    </svg>
  )
}

export default CustomMarker