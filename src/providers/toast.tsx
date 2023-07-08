"use client"

import { ReactNode } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ToastContainerProps {
  children: ReactNode
}

export default function ToastProvider({ children }: ToastContainerProps) {
  return (
    <>
      {children}

      <ToastContainer />
    </>
  )
}