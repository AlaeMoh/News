"use client"
import React from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { useRouter } from 'next/navigation';

export default function Page() {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');
  const router = useRouter()
  const toggleHandle = ()=>{
    router.push("/politicals")
  }

  const checkLatestNews= ()=>{
    router.push("/politicals")
  }
  return (
 <>
 <div className="d-flex justify-content-center mt-3">
            <ButtonGroup className="  mb-2">
        <ToggleButton
          id="toggle-check"
          type="checkbox"
          checked={checked}
          value="1"
          onClick={toggleHandle}
          className='bg-light text-danger'
        >
          Politicals
        </ToggleButton>
                <ToggleButton
          id="toggle-check"
          type="checkbox"
          checked={checked}
          value="1"
          className='bg-light text-danger'
          
        >
          Checked
        </ToggleButton>
                <ToggleButton
          id="toggle-check"
          type="checkbox"
          checked={checked}
          value="1"
          className='bg-light text-danger'
          
        >
          Checked
        </ToggleButton>
                <ToggleButton
          id="toggle-check"
          type="checkbox"
          checked={checked}
          value="1"
          className='bg-light text-danger'
        >
          Checked
        </ToggleButton>
      </ButtonGroup>
 </div>

    </>
  )
}
