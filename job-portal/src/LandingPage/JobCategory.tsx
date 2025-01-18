import { jobCategory } from "../Data/Data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function JobCategory() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>
            <div className="px-2 my-5 text-center">

                <div className="text-center fs-1" style={{ textTransform: 'capitalize' }}>
                    browse <span className="text-primary">job</span> category
                </div>
                <div className="col-lg-6 mx-auto">
                    <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor sed explicabo reprehenderit, consectetur quod debitis velit cum fuga eligendi nisi amet expedita totam in?</p>

                </div>
            </div>

            <div className="container">
                <Carousel responsive={responsive}>

                    {
                        jobCategory.map((category, idx) => <div key={idx} className="mx-2" >
                            <div className="card">
                                <div className="card-body">
                                    <div style={{ textAlign: 'center' }}>
                                        <img src={`/Category/${category.name}.png`} style={{ height: '50px' }} alt={category.name} />

                                    </div>
                                    <p className="card-title fs-2" style={{ textTransform: 'capitalize', textAlign: 'center' }}>{category.name} </p>
                                    <p className="card-text" style={{ textAlign: 'center' }}>{category.desc}</p>
                                    <p className="fs-4" style={{ textTransform: 'capitalize', textAlign: 'center' }}>{category.jobs} job posted</p>
                                </div>
                            </div>
                        </div>)
                    }
                </Carousel>
            </div>






        </>
    )

}

export default JobCategory;
