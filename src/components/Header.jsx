import Button from "./Button"


const Header = ({title, showAdd,showAddTask}) => {
   
  return (
    <header className="header">
        <h1 >{title}</h1>
        {showAddTask?<Button color="red" text="Close" onClick={showAdd}/>:<Button color="green" text="Add" onClick={showAdd}/>}
        
    </header>
  )
}

Header.defaultProps = {
    title: "Task Tracker"
}


export default Header