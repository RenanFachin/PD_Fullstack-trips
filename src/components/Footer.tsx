import Image from "next/image";

import logoImage from '../../public/Logo.png'

export function Footer() {
  return (
    <footer className="bg-purple-50 p-5 flex flex-col items-center justify-center mt-5">
      <Image src={logoImage} width={133} height={23} alt="Full Stack Week" />

      <p className="font-medium text-sm text-secondary text-center mt-5">
        Projeto desenvolvido com o objetivo de praticar habilidades em reactJS e Typescript
      </p>
    </footer>
  )
}