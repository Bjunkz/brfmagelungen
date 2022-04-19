import Link from "next/link";


const PageHeader = (props) => {

 return(
     <div className="page-header-container">
         <div className="breadcrumbs flex-row">

         { props.breadcrumbs ? props.breadcrumbs.map((breadcrumb, index) => {
             return(
                    <Link href={breadcrumb.URL} key={index}><a className="breadcrumb">{breadcrumb.text}</a></Link>
             )
         }): ''}
         </div>

         <h1 className="page-headline">{props.title}</h1>

         <div className="spacing medium"></div>

        <div className="page-header-links-container flex-row">
            { props.links ? props.links.map(link => {
                return(
                    <div className="page-header-links">
                        <Link href={link.URL}><a>{link.linkText}</a></Link>
                    </div>
                )
            }): ''}
        </div>


     </div>
 )

}

export default PageHeader;