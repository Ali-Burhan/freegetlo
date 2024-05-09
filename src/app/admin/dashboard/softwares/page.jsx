'use client'
import DataTable from "@/app/components/admin/datatable/datatable"
import Image from "next/image"
import { useEffect, useState } from "react"

const Departments = () => {
  const [popup,setPopup] = useState(false)
  const [deptname,setDeptName] = useState('')
  const [hod,sethod] = useState('')
  const [loading,setLoading] = useState(false)
  const [software,setsoftware] = useState([])


 

  //Department Pop up
  const popupinput =  () => {
    return(
      <div className='fixed inset-0 animate-pop flex items-center justify-center bg-gray-800 bg-opacity-50'>
          <div className='w-[800px] bg-white  rounded-xl '>
              <div className='flex p-2 justify-between items-center rounded-t-xl bg-[var(--primary-color)]  text-white from-[var(--primary-color)] to-[var(--secondary-color)]'>
                <h1 className='px-2'>Add New</h1>
                <Image src={'/admin/Groupwhite.svg'} width={30} height={30} className='cursor-pointer' onClick={()=>setPopup(false)} alt="image"/>
              </div>
              <div className="p-8 flex flex-col gap-4">
                <div className="flex gap-5">
                <label htmlFor="" className="w-[15%]">Thumbnail</label>
                <div className="border rounded  w-[250px] h-[200px] relative flex justify-center items-center text-[var(--secondary-color)]">
                  <div className="flex flex-col justify-center items-center">
                  <Image width={30} height={30} src={'/iconclound.png'}/>
                  <p>Upload</p>
                  </div>
                <input type="file" className="w-full h-full absolute top-0 opacity-0"/>
                </div>
                </div>
                <div className="flex gap-5">
                  <label htmlFor="" className="w-[15%]">Status</label>
                <select name="" id="" className="border w-[40%] p-1 rounded">
                  <option value="">Active</option>
                  <option value="">Not Active</option>
                </select>
                </div>
                <div className="flex gap-5">
                  <label htmlFor="" className="w-[15%]">Title</label>
                  <input type="text" className="w-[70%] p-1 border rounded outline-none" placeholder="Title" />
                </div>
                <div className="flex gap-5">
                  <label htmlFor="" className="w-[15%]">Description</label>
                  <textarea type="text" className="w-[70%] p-1 border rounded outline-none" placeholder="Decription" rows={4}></textarea>
                </div>
                <div className="flex gap-8">
                <div className="flex gap-5 flex-1">
                  <label htmlFor="" className="w-[38%]">Domain</label>
                  <select type="text" className="w-full p-1 border rounded outline-none" placeholder="Decription" rows={4}>
                <option value="">Select Field</option>
                <option value="">Courses</option>
                <option value="">Software</option>
                <option value="">Other</option>
                  </select>
                </div>
                <div className="flex gap-5 flex-1">
                  <label htmlFor="" className="w-[38%]">Category</label>
                  <select type="text" className="w-full p-1 border rounded outline-none" placeholder="Decription" rows={4}>
                <option value="">Select Field</option>
                  </select>
                </div>
                </div>
                <hr />
                <div className="flex gap-5 items-center">
                    <p className="font-bold">Storage: </p>
                    <div className="flex gap-2 items-center">
                    <input type="radio" name="storage" id="storage" className=""/>
                      <label htmlFor="">Google Drive</label>
                    </div>
                    <div className="flex gap-2 items-center">
                    <input type="radio" name="storage" id="storage"/>
                      <label htmlFor="">Drive</label>
                    </div>
                    <div className="flex gap-2 items-center">
                    <input type="radio" name="storage" id="storage"/>
                      <label htmlFor="">Mega</label>
                    </div>
                    <div className="flex gap-2 items-center">
                    <input type="radio" name="storage" id="storage"/>
                      <label htmlFor="">Drive Name</label>
                    </div>
                    <div className="flex gap-2 items-center">
                    <input type="radio" name="storage" id="storage"/>
                      <label htmlFor="">Storage name</label>
                    </div>
                </div>
                <div className="flex gap-5 mt-2">
              <label htmlFor="" className="w-[15%]">Link</label>
              <input type="text" className="w-[70%] border p-1 rounded" placeholder="File Link" />
                </div>
                <hr />
                <div className="flex justify-between">
                  <button className="border rounded-full py-2 px-4">Save Draft</button>
                  <button className="border rounded-full py-2 px-8 bg-[var(--primary-color)] text-white">Add</button>
                </div>
              </div>
          </div>
      </div>
    )
  }


  return (
    <div>
      {popup && popupinput()}
      <div className="m-5 rounded-xl shadow-sm shadow-black w-[calc(100%-40px)] overflow-hidden h-[720px]">   
    {/* Top bar title */}
    <div className="flex p-4 items-center justify-between">
      <div className="font-semibold text-lg">
        Software Lists
      </div>
      <div className="cursor-pointer" onClick={()=>setPopup(true)}>
          <Image src={'/admin/Group.png'} alt="Customer Pic" height={30} width={30}/>
      </div>
      </div> 
      {/* End Top bar */}
      {/* Entites and search functionality */}
      
    <div>
      <div></div>
      <div></div>
      </div> 
      <div className="">
      <div className="table-container">
      <table className="data-table">
        <thead className=' bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]  border text-white'>
          <tr>
            <th onClick={()=>sortArrSerial()}>
            {/* {
        pages.map((ele,index) => <p key={index}>{ele}</p>)
        } */}
              S.#
            </th>
            <th onClick={() => sortArrName()}>
              Dept Name
            </th>
            <th onClick={() => sortArrSubtitles()}>
              HOD
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {software.map((item,ind) => (
            <tr key={item._id} className='cursor-pointer border'>
              <td>{ind + 1}</td>
              <td>{item.deptname}</td>
              <td>{item.hod}</td>
              <td className='flex gap-3'>
                <Image src={'/admin/datatableicons/edit.svg'} height={28} alt={item.id} width={28}/>
                {loading && "Deleting"}
                <Image src={'/admin/datatableicons/delete.svg'} height={28} alt={item.id} width={28} onClick={()=>handleDelete(item._id)}/>
                <Image src={'/admin/datatableicons/view.svg'} height={28} alt={item.id} width={28}/>
              </td>
            </tr>
          ))}
        </tbody>
        
      </table>
    </div>
      </div>
      {/* end functionality */}
    </div>
    </div>
  )
}

export default Departments