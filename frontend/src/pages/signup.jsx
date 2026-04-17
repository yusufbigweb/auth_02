import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import axios from "axios"

const Signup = () =>{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
  const handleSubmit = async (e) => {
  e.preventDefault();

  const setData = {
    name, 
    email,
    password
  }

  try {
    const res = await axios.post(
      "http://localhost:3001/api/auth/signup",  
      setData
    );

    alert("sign-up successfully");

  } catch (error) {
    console.error("error from creating user:", error);
  }
};
    

    return(
        <div className="flex items-center h-screen  justify-center">
            <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle className="text-center text-xl">Sign Up</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <Label className="py-2 ">Name:</Label>
                                    <Input type="text" required  name="name" placeholder="Enter your name" onChange={(e)=> setName(e.target.value)}   />
                                </div>
                                <div className="mb-3">
                                    <Label className="py-2 ">Email:</Label>
                                    <Input type="email" required  name="email" placeholder="Enter your email" onChange={(e)=> setEmail(e.target.value)}   />
                                </div>
                                <div  className="mb-3">
                                    <Label className="py-2 ">Password:</Label>
                                    <Input type="password" required  name="password" placeholder="Enter your password" onChange={(e)=> setPassword(e.target.value)}   />
                                </div>
                                <div  className="mb-3 mt-5">
                                    <Button className="w-full">Sign Up</Button>
                                </div>
                        </form>
                    </CardContent>
            </Card>
        </div>
    )
}

export default Signup

// https://chatgpt.com/c/69df8998-a494-8324-a39d-d3ff69b8685e
// https://chatgpt.com/c/69dfc319-ee88-8322-934f-6ad3c7ed2e66