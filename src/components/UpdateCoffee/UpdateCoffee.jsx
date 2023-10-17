import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const {_id,details, name,category, chef, supplier, taste, photo } = coffee

    const handleUpdateCoffee = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee = {name,chef,supplier,taste,category,details,photo}
        console.log(updatedCoffee);

    //    send data to server 
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method: 'PUT',
            headers:{
                'content-type':'application/json',
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'success!',
                    text: 'coffee Update successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            }
        })
    }

    return (
        <div className="bg-[#F4F3F0] mb-5 max-w-5xl mx-auto p-10">
            <h1 className="text-center text-3xl font-bold text-orange-800 my-5">Update Coffee</h1>
            <form onSubmit={handleUpdateCoffee}>
                <div className="flex gap-8">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name} placeholder="Enter Coffee Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Chef</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="chef" defaultValue={chef} placeholder="Enter Coffee chef" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* 2nd row  */}
                <div className="flex gap-8">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" defaultValue={supplier} placeholder="Enter Coffee Supplier" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" 
                            defaultValue={taste} placeholder="Enter Coffee taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* 3nd row  */}
                <div className="flex gap-8">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" defaultValue={category} placeholder="Enter Coffee Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" defaultValue={details} placeholder="Enter Coffee Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className=" mt-7">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="photo" defaultValue={photo} placeholder="Enter Photo URL" className="input input-bordered w-full" />
                    </label>
                </div>
                <input type="submit" value="Update Coffee" className="btn-block bg-black text-white py-3 mt-5" />
            </form>
        </div>
    );
};

export default UpdateCoffee;