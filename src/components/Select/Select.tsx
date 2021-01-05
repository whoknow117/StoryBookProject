import React, {useState}  from 'react';
import classes from './Select.module.scss';


export type SelectPropsType = {

}
export type MenuType = {
    id: string
    title: string
    path: string
}

const menu: MenuType[] = [
    {id: '1', title: 'react', path: '/'},
    {id: '2', title: 'html', path: '/'},
    {id: '3', title: 'css', path: '/'},
    {id: '4', title: 'games', path: '/'},
    {id: '5', title: 'party', path: '/'},
    {id: '6', title: 'eat', path: '/'},
    {id: '7', title: 'sleep', path: '/'},
    {id: '8', title: 'work', path: '/'},
]

const Select: React.FC<SelectPropsType> = ( ) => {

    const[collapsed, setCollapsed] = useState<boolean>(false);
    const[select, setSelect] = useState<string>(menu[0].title)

    const collapsCallback = () => {
        setCollapsed(!collapsed);
    }
    const selectCallback = (title:string) => {
        setSelect(title)
    }

    return <div className={classes.menu}>
        <div className={classes.title} onClick={collapsCallback}>{select}
            <span className={collapsed ? classes.collapsed : classes.arrow}></span>
        </div>

         <div className={classes.items}>
             {collapsed ? '' : menu.map( item => {
                 if(item.title === select) {
                     return <div onClick={() => {selectCallback(item.title)}} className={`${classes.item} ${classes.activeItem}`}>{item.title}</div>
                 } else if(item.title !== select) {
                     return <div onClick={() => {selectCallback(item.title)}} className={`${classes.item}`}>{item.title}</div>
                 }

                 return;
             })}
         </div>




        {/*<input list='cookies' />*/}
        {/*<datalist id="cookies">*/}
        {/*    <option value="Chocolate Chip"/>*/}
        {/*    <option value="Peanut Butter"/>*/}
        {/*    <option value="Raisin Oatmeal"/>*/}
        {/*</datalist>*/}


    </div>
}

export default Select;