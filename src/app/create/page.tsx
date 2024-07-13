"use client"

import React, { useEffect, useState } from 'react'
import NewFooter from '../components/NewFooter'
import Navbar from '../components/Navbar'
import Keyboard from '../components/Keyboard'
import axios from 'axios'
// import toast, { Toaster } from 'react-hot-toast';
import { RocketIcon } from "@radix-ui/react-icons"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"


import { Input } from "@/components/ui/input"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"



import Export from '../components/Export'




function Page() {

  const {toast} = useToast()

  const [src, setsrc] = useState([])
  const [character, setcharacter] = useState('')
  const [SelectedKey,setSelectedKey] = useState(0)
  const [imageSource,setimageSource] = useState('')
  const [imgEach1,setimgEach1] = useState([''])
  const [convertedimgEach1,setconvertedimgEach1] = useState([''])
  const [convertedimgEach2,setconvertedimgEach2] = useState([''])
  const [convertedimgEach3,setconvertedimgEach3] = useState([''])
  const [imgEach2,setimgEach2] = useState([''])
  const [imgEach3,setimgEach3] = useState([''])
  const [selectedRow, setselectedRow] = useState(1)
  const [image, setimage] = useState('')

  const getCharacter = async (character: string) => {
    try {
      
      const response = await axios.get(`https://kitsu.io/api/edge/characters?filter[name]=${character}&Page[limit]=10&Page[offset]=0`)
      // const response = await axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${character}`)
      
      setsrc(response.data.data)
   
      // setanimeLink(response.data.data[1].relationships.animeCharacters.links.related)

      // console.log(response.data.data[1].relationships.animeCharacters.links.related)
  

    } catch (error: any) {
      console.log(error)
    }
  }
  

  useEffect(() => {
    getCharacter("luffy")
  }, [])

  

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files?.[0];
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setimage(reader.result as string);
      };
      reader.readAsDataURL(image);
    }
  };
useEffect(() => {
 console.log(image);
}, [image])


  const handleimageSet = (imgSrc:string)=>{

    if(selectedRow == 1){
      setimageSource(imgSrc);
      const newArray = [...imgEach1]; 
      newArray[SelectedKey] = imgSrc;
      setimgEach1(newArray);
    }else if(selectedRow == 2){
      setimageSource(imgSrc);
      const newArray = [...imgEach2]; 
      newArray[SelectedKey] = imgSrc;
      setimgEach2(newArray);
    }else if(selectedRow == 3){
      setimageSource(imgSrc);
      const newArray = [...imgEach3]; 
      newArray[SelectedKey] = imgSrc;
      setimgEach3(newArray);

    }

    

  }

  

 const keysRow1OnlyKeys = [ 'Q' ,  'W' ,  'E' ,  'R' ,  'T', 'Y' , 'U' , 'I' , 'O' , 'P' ];
  const keysRow1:[string] = [""];
  const keysRow2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const keysRow3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];




useEffect(() => {
  console.log(imgEach1)
}, [imgEach1])

useEffect(() => {
  if(imgEach1.length == 10 && imgEach2.length == 9 && imgEach3.length == 7){
      toast({
        title: "Heads Up! You made your design!",
        description: "You can now Export it by clicking on the Export button"
      })
  }
}, [imgEach1,imgEach2,imgEach3])

const [loaded,setloaded] = useState(false)
const [loading,setloading] = useState(false)

const handleClick = async () => {
  setloading(true)
  try {
    const response = await axios.post("/api/convert-image",{data1:imgEach1,data2:imgEach2,data3:imgEach3});
    setconvertedimgEach1(response.data.data1)
    setconvertedimgEach2(response.data.data2)
    setconvertedimgEach3(response.data.data3)
    console.log(response.data.data1)
    if(response.data.data1){
     setloaded(true)
      setloading(false)
      toast({
        title: "Downloading...",
        description: "Download will start anytime now",
      })
    }
   
    console.log(response);
   
  } catch (error) {
    console.error('Error converting image:', error);
  }

}


  return (



    <div className='text-white z-10 overflow-x-hidden  '>
     
    
      <Navbar />
      <Toaster /> 
      <div className='p-10 bg-gradient-to-r hidden sm:block from-black to-gray-900 text-white overflow-x-hidden'>

        <div className='h-screen w-full border-gray-700 border-[1px] rounded-lg  '>




          <div className=' w-full border-gray-700 border-[1px] rounded-t-lg h-16 flex  justify-between items-center px-10'>
            <h2 className='font-bold text-white text-xl'>Customization Panel</h2>
            <div className='flex gap-5'>

              <button className='py-2 px-4 bg-gray-700 rounded-md font-bold text-sm hover:bg-gray-400' onClick={handleClick}>{!loading?"Export":"Exporting.."}</button>
              {/* <button className='py-2 px-4 bg-gray-700 rounded-md font-bold text-sm hover:bg-gray-400'>Save</button> */}
              {/* <button className='py-2 px-4 bg-gray-700 rounded-md font-bold text-sm hover:bg-gray-400'>Share</button> */}
              <Popover>
                <PopoverTrigger className='py-2 px-4 bg-gray-700 rounded-md font-bold text-sm hover:bg-gray-400'>Save</PopoverTrigger>
                <PopoverContent>Coming soon.</PopoverContent>
            </Popover>
              <Popover>
                <PopoverTrigger className='py-2 px-4 bg-gray-700 rounded-md font-bold text-sm hover:bg-gray-400'>Share</PopoverTrigger>
                <PopoverContent>Coming soon.</PopoverContent>
            </Popover>

              <button className='py-2 px-4 bg-gray-700 rounded-md font-bold text-sm hover:bg-gray-400 '>. . .</button>


            </div>

          </div>


          <div className=' w-full full h-[90%]  flex gap-7  py-10 px-2 pl-4 justify-center'>
          

            <div  className='h-full git rounded-sm w-[40%] flex items-center justify-center '> {/* keyboard div*/}
    

              <div className="flex flex-col items-center w-fit rounded-lg border-[4px] justify-center p-4 space-y-2">
                <div className="flex space-x-2">

                  {
                    keysRow1OnlyKeys.map((key:any,index) =>{return(
                      <button
                      key={index}
                      className="w-10 h-10 flex focus:border-4 focus:border-white  items-center object-cover border justify-center bg-gray-400 text-gray-800 font-bold rounded shadow-md"
                      onClick={()=>{setSelectedKey(index);setselectedRow(1)}} >
                      <img src={imgEach1[index] } className=' w-full h-full' />
                   
                    </button> 
                    )

                    })
                  }
                    
                  
                </div>
                <div className="flex space-x-2">
                  {keysRow2.map((key:any,index:any )=> (
                    <button
                      key={key}
                      className="w-10 h-10 flex shrink focus:border-4 focus:border-white border items-center justify-center bg-gray-400 text-gray-800 font-bold rounded shadow-md"
                      onClick={()=>{setSelectedKey(index);setselectedRow(2)}} 
                    >
                     <img src={imgEach2[index] } alt="" className=' w-full h-full' />
                    </button>
                  ))}
                </div>
                <div className="flex space-x-2">
                  {keysRow3.map((key:any,index:any) => (
                    <button
                      key={key}
                      className="w-10 h-10 flex items-center focus:border-4 focus:border-white border justify-center bg-gray-400 text-gray-800 font-bold rounded shadow-md"
                      onClick={()=>{setSelectedKey(index);setselectedRow(3)}} 
                    >
                       <img src={imgEach3[index] } alt="" className=' w-full h-full' />
                    </button>
                  ))}
                </div>
                <div className=" space-x-2 hidden">
                  <div
                    className="w-40 h-10 flex items-center justify-center bg-gray-200 text-gray-800 font-bold rounded shadow-md"
                  >
                    Space
                  </div>
                </div>
              </div>

            </div>


            <div className='h-full border border-gray-700 rounded-sm w-[36%] p-5 flex flex-col gap-5'>
              <h2>Choose your image</h2>
              <div className='flex gap-5 text-white'>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select genre" />
                  </SelectTrigger>
                  <SelectContent className='text-white bg-black'>
                    <SelectItem value="light">Anime</SelectItem>
                    <SelectItem value="dark">Movies</SelectItem>
                    <SelectItem value="system">Cartoon</SelectItem>
                  </SelectContent>
                </Select>


          

              </div>


              <div className='w-[60%] flex gap-3'>
                <Input onChange={(e: any) => { setcharacter(e.target.value) }} placeholder='Name of character' />
                <button onClick={() => { getCharacter(character) }} className='py-2 px-4 bg-gray-700 rounded-md font-bold text-sm hover:bg-gray-400'>Search</button>
              </div>

              <div className='overflow-y-auto overflow-x-hidden h-full flex flex-wrap gap-5 pb-10  w-full'>
                {src.map((src: any, index: any) => {

                  if (src.attributes.image) {
                    return <img key={index} onClick={()=>{handleimageSet(src.attributes.image.original)}} src={src.attributes.image.original} alt="" className='w-[30%] h-[30%] ' />
                  } else {
                    return null
                  }


                })}
              </div>


            </div>
            <div className='h-full border border-gray-700 rounded-sm w-[20%] px-4 flex flex-col gap-6 item-center  py-3'>
              <h2>Add your custom Images</h2>
              <p className='text-gray-400'>Click on the picture below to add on keyboard</p>
              <div className='w-[80%]'>
              <Input id="picture" placeholder='custom' className='text-white' type="file" onChange={handleImageChange}  />
              </div>
              <img src={image} onClick={()=>{handleimageSet(image)}}  alt="" />
          
         
            </div>

            <div>
           
             
            </div>
          </div>




        </div>
      
      </div>
      <Export row1={convertedimgEach1} row2={convertedimgEach2} row3={convertedimgEach3} loaded = {loaded}  />

      {/*mobile view*/}


                <div className='flex flex-col sm:hidden py-20 px-6 gap-10 text-white bg-black'>

                  <h2 className='text-white font-bold text-xl'>Preview</h2>
                  <div className='w-full  flex justify-center'>
                  <div className="flex flex-col items-center w-fit   rounded-lg border-[4px] justify-center p-4 space-y-2">
                <div className="flex space-x-1">

                  {
                    keysRow1OnlyKeys.map((key:any,index) =>{return(
                      <button
                      key={index}
                      className="w-7 h-7 flex focus:border-4 focus:border-white border items-center object-cover justify-center bg-gray-400 text-gray-800 font-bold rounded shadow-md"
                      onClick={()=>{setSelectedKey(index);setselectedRow(1)}} >
                      <img src={imgEach1[index] } className=' w-full h-full' />
                   
                    </button> 
                    )

                    })
                  }
                    
                  
                </div>
                <div className="flex space-x-1">
                  {keysRow2.map((key:any,index:any )=> (
                    <button
                      key={key}
                      className="w-7 h-7 flex focus:border-4 focus:border-white border items-center justify-center bg-gray-400 text-gray-800 font-bold rounded shadow-md"
                      onClick={()=>{setSelectedKey(index);setselectedRow(2)}} 
                    >
                     <img src={imgEach2[index] } alt="" className=' w-full h-full' />
                    </button>
                  ))}
                </div>
                <div className="flex space-x-1">
                  {keysRow3.map((key:any,index:any) => (
                    <button
                      key={key}
                      className="w-7 h-7 flex focus:border-4 focus:border-white border items-center justify-center bg-gray-400 text-gray-800 font-bold rounded shadow-md"
                      onClick={()=>{setSelectedKey(index);setselectedRow(3)}} 
                    >
                       <img src={imgEach3[index] } alt="" className=' w-full h-full' />
                    </button>
                  ))}
                </div>
                <div className=" space-x-1 hidden">
                  <div
                    className="w-32 h-7 flex items-center justify-center bg-gray-200 text-gray-800 font-bold rounded shadow-md"
                  >
                    Space
                  </div>
                </div>
                   </div>
                  </div>


           
                  <div className='flex flex-col gap-5'>

                
                
                  <h2 className='text-white font-bold text-xl'>Choose your Image</h2>

                  <div className='flex gap-5 text-white'>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select genre" />
                  </SelectTrigger>
                  <SelectContent className='text-white bg-black'>
                    <SelectItem value="light">Anime</SelectItem>
                    <SelectItem value="dark">Movies</SelectItem>
                    <SelectItem value="system">Cartoon</SelectItem>
                  </SelectContent>
                </Select>


                <button className='py-2 px-4 bg-gray-700 rounded-md font-bold text-sm hover:bg-gray-400' onClick={handleClick}>{!loading?"Export":"Exporting.."}</button>

              </div>
              </div>


              <div className='w-[60%] flex gap-3'>
                <Input onChange={(e: any) => { setcharacter(e.target.value) }} placeholder='Name of character' className='w-40' />
                <button onClick={() => { getCharacter(character) }} className='py-2 px-4 bg-gray-700 rounded-md font-bold text-sm hover:bg-gray-400'>Search</button>
              </div>

              <div className='overflow-y-auto  overflow-x-hidden max-h-[40vh] flex flex-wrap gap-5 pb-10 px-3  w-full'>
                {src.map((src: any, index: any) => {

                  if (src.attributes.image) {
                    return <img key={index} onClick={()=>{handleimageSet(src.attributes.image.original)}} src={src.attributes.image.original} alt="" className='w-[20%]' />
                  } else {
                    return null
                  }


                })}
              </div>


              <div className='h-full border  border-gray-700 rounded-sm w-full px-5 flex flex-col gap-7 item-center  py-5'>
              <h2 className='font-bold text-xl'>Add your custom Images</h2>
              <p className='text-gray-400'>Click on the picture below to add on keyboard</p>
              <div className='w-[70%]'>
              <Input id="picture" placeholder='custom' className='text-white' type="file" onChange={handleImageChange}  />
              </div>
              <img src={image} onClick={()=>{handleimageSet(image)}}  alt="" className='w-[60%]' />
          
         
            </div>

                </div>
                
     

      {/* <button className='px-2 py-1 bg-black text-white' onClick={handleClick}>Click me</button> */}

      <NewFooter />
    </div>


  )
}

export default Page
