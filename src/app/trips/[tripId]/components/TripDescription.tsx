interface TripDescriptionProps {
  description: string
}

export function TripDescription({ description }: TripDescriptionProps) {
  return (
    <div className="flex flex-col p-5">
      <strong className="font-semibold text-secondary text-lg lg:text-2xl">
        Sobre a viagem
      </strong>

      <p className="text-xs leading-6 text-secondary mt-3">
        {description}
      </p>
    </div>
  )
}