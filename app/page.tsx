"use client"
import { Input } from '@/components/ui/input'
import { LOGIN } from '@/graphql/mutation/login'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Home = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [step, setStep] = useState(0);
  const [error, setError] = useState('none');

  const router = useRouter();

  const toChat = ()=>{
    router.push('/chat', {scroll:false})
  };

  const toHome = ()=>{
    router.push('/', {scroll:false})
  };
  
  const checkEmail = ()=>{
    if(email === ''){
      setError("Please Enter Your Email");
    }else if(email !== ''){
      setError("none");
      setStep(1)
    } 
    
  };

  const handleLogin = async()=>{

 
    if(password === ''){
      setError("Please Enter Your Password");
    }else{
      setError("none");

      const args = {
        email,
        password
      }

      const res = await LOGIN(args);

      if(res === "success"){
        toChat();
      }else{
        setError("Wrong Email or Password");
        setStep(0);
        setPassword('');
        setEmail('');
      }

    }

  };

  return (
    <div className='flex flex-col min-h-screen w-full items-center justify-center pb-4 relative'>

      <div className='flex flex-col items-center z-[1000]'>
        <svg width="70" height="86" viewBox="0 0 70 86" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_40_93)">
            <g clipPath="url(#clip1_40_93)">
              <path d="M58.2444 12.2878C57.8446 8.77552 56.1174 5.54894 53.4163 3.2686C50.7152 0.988258 47.2447 -0.17335 43.7151 0.0215868C40.1856 0.216524 36.864 1.75326 34.4305 4.31718C31.997 6.88111 30.6356 10.2783 30.625 13.8132V13.9459L7.90413 61.4818L6.9985 63.3776C6.9985 63.3878 6.9985 63.3995 6.98975 63.4097C6.981 63.4199 6.97517 63.4287 6.97079 63.4403L0.116616 79.5987C-0.00957646 79.8953 -0.0339159 80.2255 0.047403 80.5374C0.128722 80.8494 0.311115 81.1256 0.56607 81.3229C0.821024 81.5202 1.13417 81.6274 1.45655 81.6279C1.77892 81.6283 2.09237 81.5219 2.34787 81.3254L19.0166 68.5008H30.4529L29.3198 70.7656C29.2252 70.9552 29.1731 71.1631 29.167 71.3749C29.161 71.5867 29.2012 71.7973 29.2848 71.992L33.2704 81.2918L31.0523 83.5114C30.7866 83.7865 30.6396 84.1548 30.643 84.5372C30.6463 84.9196 30.7997 85.2853 31.0701 85.5557C31.3404 85.8261 31.7062 85.9795 32.0886 85.9828C32.471 85.9861 32.8393 85.8391 33.1144 85.5735L35.3515 83.3379L41.7492 85.8972C41.9218 85.966 42.1059 86.0011 42.2917 86.0008C42.4593 85.9967 42.625 85.9642 42.7817 85.9045C42.8298 85.887 42.8706 85.8637 42.9173 85.8418C43.0349 85.7842 43.1443 85.7111 43.2425 85.6245C43.2658 85.6041 43.2965 85.5968 43.3198 85.5735L45.5569 83.3379L51.9546 85.8972C52.3139 86.0411 52.7157 86.0364 53.0715 85.884C53.4273 85.7317 53.708 85.4443 53.8519 85.085C53.9958 84.7256 53.991 84.3239 53.8387 83.9681C53.6864 83.6123 53.3989 83.3315 53.0396 83.1877L46.3065 80.4956L42.4375 71.4656L44.2488 67.8547C48.2959 66.7985 51.8766 64.4257 54.4266 61.1102C56.9767 57.7948 58.3511 53.7251 58.3334 49.5424V23.2924H68.5417C68.8478 23.2924 69.1461 23.1961 69.3944 23.0171C69.6427 22.8381 69.8284 22.5856 69.9252 22.2952C70.022 22.0048 70.025 21.6914 69.9337 21.3992C69.8425 21.107 69.6616 20.851 69.4167 20.6674L58.2444 12.2878ZM44.4792 2.87567C47.38 2.87567 50.162 4.02801 52.2132 6.07919C54.2644 8.13037 55.4167 10.9124 55.4167 13.8132V40.4803L49.1254 34.9386C48.4876 30.4386 46.8062 26.1501 44.2156 22.4157C41.625 18.6813 38.1969 15.6045 34.2052 13.4311L34.1848 13.418L33.7852 13.1948C33.7167 13.1569 33.6394 13.1234 33.5781 13.0855C33.7626 10.3189 34.9909 7.72562 37.0147 5.83022C39.0384 3.93482 41.7065 2.87876 44.4792 2.87567ZM19.1727 65.2341H19.1494C16.7904 65.1334 14.4561 64.7125 12.2106 63.9828C13.0141 64.0499 13.8148 64.0995 14.6154 64.0995C19.4318 64.0961 24.1723 62.8996 28.4133 60.6169C32.6544 58.3343 36.264 55.0365 38.9194 51.0183C41.5749 47.0002 43.1936 42.3867 43.6309 37.5902C44.0682 32.7938 43.3105 27.9637 41.4254 23.5315C44.3451 27.5157 46.0803 32.2433 46.4314 37.1702C46.7826 42.0971 45.7353 47.023 43.4102 51.3809C41.0851 55.7389 37.5767 59.3517 33.2888 61.8035C29.0009 64.2553 24.1078 65.4465 19.1727 65.2399V65.2341ZM32.8344 16.0882C36.7891 19.9127 39.4413 24.8837 40.4161 30.2982C41.3908 35.7127 40.6387 41.2966 38.266 46.2602C35.8934 51.2237 32.0204 55.3158 27.1946 57.9576C22.3689 60.5994 16.8348 61.6573 11.375 60.9816L32.8344 16.0882ZM9.07663 65.9414C11.0504 66.7647 13.1089 67.3682 15.2148 67.741L4.9685 75.6276L9.07663 65.9414ZM43.4788 81.2918L41.9402 82.8304L36.1069 80.497L32.2292 71.4641L33.7137 68.5008H39.375C39.8125 68.5008 40.2588 68.4585 40.7006 68.4293L39.534 70.7626C39.4389 70.9523 39.3864 71.1605 39.3801 71.3726C39.3738 71.5847 39.4139 71.7956 39.4975 71.9906L43.4788 81.2918ZM42.9202 65.1962C41.7563 65.455 40.5674 65.5851 39.375 65.5841H32.2379C37.3568 63.2959 41.7021 59.572 44.7471 54.8639C47.7922 50.1558 49.4063 44.6655 49.3938 39.0584L55.4167 44.3668V49.5424C55.4341 53.1863 54.2039 56.7264 51.9305 59.5742C49.6571 62.422 46.4775 64.406 42.9202 65.1962ZM58.3334 20.3757V16.0007L64.1667 20.3757H58.3334Z" fill="white" />
              <path d="M48.125 17.459C48.9903 17.459 49.8362 17.2024 50.5556 16.7217C51.2751 16.2409 51.8358 15.5577 52.167 14.7582C52.4981 13.9588 52.5848 13.0791 52.4159 12.2305C52.2471 11.3818 51.8305 10.6023 51.2186 9.9904C50.6067 9.37854 49.8272 8.96186 48.9785 8.79305C48.1299 8.62424 47.2502 8.71088 46.4508 9.04201C45.6513 9.37315 44.9681 9.9339 44.4873 10.6534C44.0066 11.3728 43.75 12.2187 43.75 13.084C43.75 14.2443 44.2109 15.3571 45.0314 16.1776C45.8519 16.9981 46.9647 17.459 48.125 17.459ZM48.125 11.6257C48.4134 11.6257 48.6954 11.7112 48.9352 11.8714C49.175 12.0317 49.362 12.2594 49.4723 12.5259C49.5827 12.7924 49.6116 13.0856 49.5553 13.3685C49.499 13.6514 49.3602 13.9112 49.1562 14.1152C48.9523 14.3191 48.6924 14.458 48.4095 14.5143C48.1266 14.5706 47.8334 14.5417 47.5669 14.4313C47.3005 14.3209 47.0727 14.134 46.9124 13.8942C46.7522 13.6544 46.6667 13.3724 46.6667 13.084C46.6667 12.6972 46.8203 12.3263 47.0938 12.0528C47.3673 11.7793 47.7382 11.6257 48.125 11.6257Z" fill="white" />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_40_93">
              <rect width="70" height="86.002" fill="white" />
            </clipPath>
            <clipPath id="clip1_40_93">
              <rect width="70" height="86.002" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <div className='text-2xl font-medium mt-3 mobile:text-xl'>Welcom to Robin.</div>
        <div className='text-[14px] opacity-80 mobile:w-10/12 text-center mobile:text-[12px]'>Real-time communication platform for coporations.</div>
        {error !== 'none' && <span className='text-[12px] text-red-500'>{error}</span>}

        {step === 0 &&  <div className='mt-4 relative flex items-center'>
          <Input type="email" placeholder="Email" className='w-[400px] mobile:w-[280px] border-[#ffffff1f]' onChange={(evt)=>{evt.preventDefault; setEmail(evt.target.value);}} value={email}/>
          <button onClick={checkEmail} className='flex items-center gap-1 text-[12px] absolute right-[12px]  font-medium text-lime-400'>Next <ArrowRight size={18} /></button>
        </div>
        }
             {step === 1 &&  <div className='mt-4 relative flex items-center'>
          <Input type="password" placeholder="XXX-XXX" className='w-[400px] mobile:w-[280px] border-[#ffffff1f]' onChange={(evt)=>{evt.preventDefault; setPassword(evt.target.value);}} value={password}/>
          <button onClick={handleLogin} className='flex items-center gap-1 text-[12px] absolute right-[12px]  font-medium text-lime-400'>Login <ArrowRight size={18} /></button>
        </div>
        }
      </div>

      <div className='w-[400px] h-[400px] mobile:w-[180px] mobile:h-[180px] bg-[#e4ff5e] blur-[200px] opacity-20 absolute -z-0 left-0'></div>
      <div className='w-[400px] h-[400px] mobile:w-[180px] mobile:h-[180px] bg-[#36ff40] blur-[200px] opacity-25 absolute -z-0 '></div>
      <div className='w-[400px] h-[400px] mobile:w-[180px] mobile:h-[180px] bg-[#42fffc] blur-[200px] opacity-20 absolute -z-0 right-0'></div>

      <div className='z-[1000] absolute bottom-[60px]'>
        <div className='text-[10px]'>Made By <Link legacyBehavior href="https://www.imcrox.com/" passHref>
          <a target="_blank" rel="noopener noreferrer" className='text-lime-500'>ImaginecoreX</a>
        </Link></div>
      </div>

    </div>
  )
}

export default Home
