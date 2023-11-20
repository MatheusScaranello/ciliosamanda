"use client"
import { useState } from 'react'
import Axios from 'axios'

  const api = Axios.create({
    baseURL: 'http://localhost:4000'
  });

export default function Home() {

  api.get('/jogadores').then(response => {
    console.log(response);
    })

  return (
    <div>

    </div>
  )
}
