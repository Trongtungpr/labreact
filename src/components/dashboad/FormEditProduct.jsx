import { createProduct, updateProduct } from "../../api/productApi";

const FormEditProduct = (props) => {
    console.log("props product",props)
    const handleFeature = (type) => {
        const Category = document.getElementById("selector-staff").value
        var dataUpdate = {
            "name" : document.getElementById("inputName").value,
            "price" : document.getElementById("inputPrice").value,
            "category" : Category,
            "img" : document.getElementById("inputlinkimg").value,
        }
        if(type === "edit") updateProduct(props.product.id,dataUpdate);
        if(type === "add") createProduct(props.product.id,dataUpdate);
    }
    return (
        <>
            { props != [] &&
            (<div>
                <form>
                    <div class="form-group row">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Img</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputlinkimg" placeholder={props.product.img}>
                            </input>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
                        <div class="col-sm-10">
                            <input type="email" class="form-control" id="inputName" placeholder= {props.product.name}>
                
                            </input>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Price</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputPrice" placeholder={props.product.price}>
                            </input>
                        </div>
                    </div>
                    <div class="form-group row d-flex">
                        <label for="selector-staff" class="col-sm-2 col-form-label">Category</label>
                        <div class="col-sm-10">
                        <select class="form-select form-select-lg mb-3" id="selector-staff" aria-label=".form-select-lg example">
                            <option value="Fruit">Fruit</option>
                            <option value="Spice">Spice</option>
                            <option value="Juice">Juice</option>
                        </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-10 offset-sm-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck1"/>
                                    <label class="form-check-label" for="gridCheck1">
                                        Confirm to update
                                    </label>
                            </div>
                        </div>
                    </div>
                </form>
                    <div class="form-group row">
                    <div class="col-sm-10">
                        <button class="btn btn-primary back-content" onClick ={ () => handleFeature(props.type)}>Update Edit</button>
                    </div>

                </div>
            </div>
            )}
        </>
    )
}
export default FormEditProduct;