import "./ExploreMenu.css"
import { menu_list } from "../../assets/assets";

// eslint-disable-next-line react/prop-types
const ExploreMenu = ({category,setCategory,addel}) => {
    return (
        <div className="explore-menu" id="explore-menu">
           
            <div className="explore-menu-list">



                {menu_list
        .filter(item2 => item2.addel === addel)
                .map((item, index) => {
                    return (
                        <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className="explore-menu-list-item">
                            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>

                        </div>
                    )
                })}



                
            </div>
            <hr />
        </div>
    )
}

export default ExploreMenu