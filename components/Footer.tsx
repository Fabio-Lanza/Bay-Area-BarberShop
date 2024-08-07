import { Card, CardContent } from "./ui/card"

const Footer = () => {
  return (
    <footer>
    <Card className="mt-6">
      <CardContent className="px-5 py-6">
        <p className="text-xs">
          © 2023 Barber Shop. All rights reserved.
        </p>
      </CardContent>
    </Card>
  </footer>
  )
}

export default Footer