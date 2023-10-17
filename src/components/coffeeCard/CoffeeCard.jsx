import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee,coffees,setCoffees}) => {
    const { _id, name, chef, supplier, taste, photo } = coffee

    const handleDelete = id => {
        console.log('delete', id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(cof => cof._id !== _id)
                            setCoffees(remaining);
                        }
                    })

            }
        })

    }

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={photo} alt="coming soon" /></figure>
                <div className="gap-10 flex justify-center items-center">
                    <div className="ml-9">
                        <h2 className="card-title">{name}</h2>
                        <h2 className="card-title">{chef}</h2>
                        <h2 className="card-title">{supplier}</h2>
                        <h2 className="card-title">{taste}</h2>
                    </div>
                    <div className="justify-end">
                        <div className="btn-group btn-group-vertical">
                            <button className="btn">View</button>
                            <Link to={`/update/${_id}`}><button className="btn my-5">Edit</button></Link>
                            <button className="btn"
                                onClick={() => handleDelete(_id)}
                            >Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;