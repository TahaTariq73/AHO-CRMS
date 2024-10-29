import { Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useDispatch, useSelector } from "react-redux";
import { loginUser, loadUser } from '../../redux/slices/userSlice';
import { useEffect, useState } from "react"

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, status, error, isAuthenticated } = useSelector(state => state.user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    dispatch(loginUser({ email, password }));
  }

  useEffect(() => {
    dispatch(loadUser());
  }, [])

  useEffect(() => {
      if ((status == "succeeded" || status == "failed") && isAuthenticated) {
        navigate("/reports/scoreboard");
      } 
  }, [data, status, isAuthenticated])

  return (
    <div className="flex justify-center items-center w-full h-[100vh] bg-gradient-to-r from-violet-400 to-pink-700">
      <Card className="mx-auto max-w-sm border-2">
        <CardHeader>
          <CardTitle className="text-2xl"> Login </CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>

          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" onChange={e => setEmail(e.target.value)} required />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password" type="password" placeholder="********" onChange={e => setPassword(e.target.value)} required />
            </div>

            {error && (
              <p className="text-sm text-red-700"> {error.message} </p>
            )}

            <Button type="submit" className="w-full" onClick={login} disabled={status == "loading"}>
              {status == "loading" ? "Loading ..." : "Login"}
            </Button>

            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </div>

          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
