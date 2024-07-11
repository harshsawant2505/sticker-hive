"use client"

import React, { useEffect, useState } from 'react'
import NewFooter from '../components/NewFooter'
import Navbar from '../components/Navbar'
import Keyboard from '../components/Keyboard'
import axios from 'axios'

import { Input } from "@/components/ui/input"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Divide } from 'lucide-react'



function Page() {

  const [src, setsrc] = useState([])
  const [character, setcharacter] = useState('')
  const [SelectedKey,setSelectedKey] = useState('')
  const [imageSource,setimageSource] = useState('')

  const getCharacter = async (character: string) => {
    try {

      const response = await axios.get(`https://kitsu.io/api/edge/characters?filter[name]=${character}&Page[limit]=10&Page[offset]=0`)
      console.log(response.data.data)
      setsrc(response.data.data)

    } catch (error: any) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCharacter("luffy")
  }, [])


  

  const keysRow1 = [{ src: "src", key: 'Q' }, { src: "src", key: 'W' }, { src: "src", key: 'E' }, { src: "src", key: 'R' }, { src: "src", key: 'T' }, { src: "src", key: 'Y' }, { src: "src", key: 'U' }, { src: "src", key: 'I' }, { src: "src", key: 'O' }, { src: "src", key: 'P' }];
  const keysRow2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const keysRow3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];





  return (



    <div className='text-white'>
      <Navbar />

      <div className='p-10 bg-gradient-to-r from-black to-gray-900 text-white'>

        <div className='h-screen w-full border-gray-700 border-[1px] rounded-lg  '>




          <div className=' w-full border-gray-700 border-[1px] rounded-t-lg h-16 flex justify-between items-center px-10'>
            <h2 className='font-bold text-white text-xl'>Customization Panel</h2>
            <div className='flex gap-5'>

              <button className='py-2 px-4 bg-gray-700 rounded-md font-bold text-sm hover:bg-gray-400'>Export</button>
              <button className='py-2 px-4 bg-gray-700 rounded-md font-bold text-sm hover:bg-gray-400'>Save</button>
              <button className='py-2 px-4 bg-gray-700 rounded-md font-bold text-sm hover:bg-gray-400'>Share</button>
              <button className='py-2 px-4 bg-gray-700 rounded-md font-bold text-sm hover:bg-gray-400 '>. . .</button>


            </div>

          </div>


          <div className=' w-full full h-[90%]  flex gap-7 py-10 px-2 pl-4 justify-center'>


            <div className='h-full git rounded-sm w-[40%] flex items-center justify-center '> {/* keyboard div*/}


              <div className="flex flex-col items-center w-fit rounded-lg border-[4px] justify-center p-4 space-y-2">
                <div className="flex space-x-2">
                  {keysRow1.map((key: any, index: any) => (
                    <div
                      key={index}
                      className="w-10 h-10 flex items-center object-cover justify-center bg-gray-200 text-gray-800 font-bold rounded shadow-md"
                      onClick={()=>{setSelectedKey(key.key);keysRow1[index].src = imageSource;}}
                    >
                      {SelectedKey == key.key?  <img src={imageSource} alt="" className=' w-full h-full' />: null}
                   
                    </div>
                  ))}
                </div>
                <div className="flex space-x-2">
                  {keysRow2.map(key => (
                    <div
                      key={key}
                      className="w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-800 font-bold rounded shadow-md"
                    >
                      {key}
                    </div>
                  ))}
                </div>
                <div className="flex space-x-2">
                  {keysRow3.map(key => (
                    <div
                      key={key}
                      className="w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-800 font-bold rounded shadow-md"
                    >
                      {key}
                    </div>
                  ))}
                </div>
                <div className="flex space-x-2">
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
              <div className='flex gap-5'>
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


                <Input id="picture" placeholder='custom' type="file" />

              </div>


              <div className='w-[60%] flex gap-3'>
                <Input onChange={(e: any) => { setcharacter(e.target.value) }} placeholder='Name of character' />
                <button onClick={() => { getCharacter(character) }} className='py-2 px-4 bg-gray-700 rounded-md font-bold text-sm hover:bg-gray-400'>Search</button>
              </div>

              <div className='overflow-y-auto overflow-x-hidden h-full flex flex-wrap gap-5  w-full'>
                {src.map((src: any, index: any) => {

                  if (src.attributes.image) {
                    return <img onClick={()=>{setimageSource(src.attributes.image.original)}} key={index} src={src.attributes.image.original} alt="" className='w-20' />
                  } else {
                    return null
                  }


                })}
              </div>


            </div>
            <div className='h-full border border-gray-700 rounded-sm w-[20%] '></div>

            <div></div>
          </div>




        </div>

      </div>


      <NewFooter />
    </div>


  )
}

export default Page