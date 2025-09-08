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
          <ButtonGroup className="mb-2">
        <ToggleButton
          id="toggle-check"
          type="checkbox"
          variant="secondary"
          checked={checked}
          value="1"
          onClick={toggleHandle}
        >
          Politicals
        </ToggleButton>
                <ToggleButton
          id="toggle-check"
          type="checkbox"
          variant="secondary"
          checked={checked}
          value="1"
          
        >
          Checked
        </ToggleButton>
                <ToggleButton
          id="toggle-check"
          type="checkbox"
          variant="secondary"
          checked={checked}
          value="1"
          
        >
          Checked
        </ToggleButton>
                <ToggleButton
          id="toggle-check"
          type="checkbox"
          variant="secondary"
          checked={checked}
          value="1"
          
        >
          Checked
        </ToggleButton>
      </ButtonGroup>
    </>
  )
}
