import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useDispatch, useSelector } from "react-redux";
import { registerUser, verifyUser, loadUser } from '../../redux/slices/userSlice';
import { useEffect, useState } from "react"

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = useState(0);
  const { data, status, error, isAuthenticated } = useSelector(state => state.user);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otpValue, setOtpValue] = useState("");

  const register = () => {
    dispatch(registerUser({ name, email, password }));
  }

  const otpInputChange = (value) => {
    setOtpValue(value);

    if (String(value).length == 6) {
      dispatch(verifyUser({ email, otp: String(value) }));
    }
  }

  useEffect(() => {
    dispatch(loadUser());
  }, [])

  useEffect(() => {
      if ((status == "succeeded" || status == "failed") && isAuthenticated) {
        navigate("/reports/scoreboard");
      } 
  }, [data, status, isAuthenticated])

  useEffect(() => {
    if (status == "succeeded" && tabIndex == 0) {
      setTabIndex(1);
    }
  }, [status])

  return (
    <div className="flex justify-center items-center w-full h-[100vh] bg-gradient-to-r from-violet-400 to-pink-700">
      {tabIndex == 0 ? (
        <Card className="mx-auto max-w-sm border-2">
          <CardHeader>
            <CardTitle className="text-2xl"> Register </CardTitle>
            <CardDescription>
              Enter your information below to create account
            </CardDescription>
          </CardHeader>
          <CardContent>

            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" placeholder="Your Name" onChange={e => setName(e.target.value)} required />
              </div>
              
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

              <Button type="submit" className="w-full" onClick={register} disabled={status == "loading"}>
                {status == "loading" ? "Loading ..." : "Register"}
              </Button>

              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </div>

            <div className="mt-4 text-center text-sm">
              Alreaddy have an account?{" "}
              <Link to="/login" className="underline">
                Login
              </Link>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="mx-auto max-w-sm border-2">
          <CardHeader>
            <CardTitle className="text-2xl"> Verify Account </CardTitle>
            <CardDescription>
              Enter your verification code sended you via email
            </CardDescription>
          </CardHeader>

          <CardContent className="pb-8">
            <InputOTP maxLength={6} onChange={otpInputChange}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>

              <InputOTPSeparator />
              
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>

            {error && (
              <p className="text-sm text-red-700"> {error.message} </p>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
