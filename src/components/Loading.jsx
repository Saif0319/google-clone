import {ThreeDots} from "react-loader-spinner"

const Loading = () => {

  const styles = {
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      height:"100vh"
  }

  return (
    <div style={styles}>
      <ThreeDots 
        height="80" 
        width="80" 
        radius="9"
        color="#4fa94d" 
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  )
}

export default Loading