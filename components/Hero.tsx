export const Hero = ({ heading, subheading }: { heading: string, subheading: string }): JSX.Element => {
  return (
    <div className="w-screen max-w-full pt-2 hero bg-base-200">
      <div className="text-center hero-content">
        <div className="">
          <h1 className="text-5xl font-bold">{heading}</h1>
          <p className="py-6">{subheading}</p>
        </div>
      </div>
    </div>
  )
}