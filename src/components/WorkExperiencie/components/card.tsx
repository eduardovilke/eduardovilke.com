interface CardProps {
  title: string;
  description: string;
}

export function Card ({ title, description }: CardProps): JSX.Element {
  return (
    <div className="card mb-6">
      <div className="flex flex-col bg-gray rounded-xl p-8">
        <h4 className="font-bold bg-clip-text bg-gradient-to-r from-red via-blue to-blue text-transparent">EXPERIÊNCIA PROFISSIONAL</h4>
        <h3 className="font-bold text-white py-4 text-3xl	">
          {title}
        </h3>
        <p className="text-gray-light">
          {description}  
        </p>
      </div>
    </div>
  )
}