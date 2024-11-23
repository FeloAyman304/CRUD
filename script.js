let product_Name=document.getElementById("product_Name")
let Product_Category=document.getElementById("Product_Category")
let product_price=document.getElementById("product_price")
let product_Description=document.getElementById("product_Description")
let product_count=document.getElementById("product_count")
let btn=document.getElementById("Add_Product")
let tbody =document.getElementById("tbody")
let product_container=[]
let update_index
let productIdCounter = 0;

function Add_Product()
{
    let product ={
        name :product_Name.value ,
        Category : Product_Category.value , 
        price : product_price.value ,
        Description:product_Description.value ,
        count :product_count.value
    }
    product_container.push(product)
    show_product()

}
function show_product(){
    tbody.innerHTML= ""
    product_container.forEach((ele , index)=>{

tbody.innerHTML+=`
  <tr>
  
             <td>${index+1}</td>
                <td>${ele.name}</td>
                <td>${ele.Category}</td>
                <td>${ele.price}</td>
                <td>${ele.Description}</td>
                <td>${ele.count}</td>
               <td> <button onclick="update_product(${index})">Edit</button> </td>
                <td> <button onclick="delete_product(${index})">Delete</button> </td>
                

            </tr>
`

    })
    productIdCounter++;
}

btn.addEventListener("click" , ()=>{
    if(btn.innerText=="update")
    {
        confirm_update(update_index)
    }
    else{
        
        Add_Product()
    }
})
function delete_product(index)
{
    product_container.splice(index ,1 )
    show_product()}
function update_product(index)
{
    update_index=index
btn.innerText="update"
product_Name.value=product_container[index].name
Product_Category.value=product_container[index].Category
product_price.value=product_container[index].price
product_Description.value=product_container[index].Description
product_count.value=product_container[index].count


}
function confirm_update(index){
product_container.splice(index , 1 ,{
    name :product_Name.value ,
        Category : Product_Category.value , 
        price : product_price.value ,
        Description:product_Description.value ,
        count :product_count.value
})
show_product()
btn.innerText="Add_Product"
}