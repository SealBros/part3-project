import React from 'react';
import { useForm } from 'react-hook-form';
import { postLogin } from '@/apis/login/login';
import { LoginUserProps } from '@/types/login/types';

const Login: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginUserProps>();

  const onSubmit = async (data: LoginUserProps) => {
    try {
      const response = await postLogin(data);
      console.log('로그인 성공:', response.data);
      // 로그인 성공 후 처리 (예: 리다이렉트)
    } catch (error) {
      console.error('로그인 실패:', error);
      // 로그인 실패 처리 (예: 에러 메시지 표시)
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">로그인</h2>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            {...register('email', { required: '이메일을 입력하세요.' })}
            className={`mt-1 block w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md p-2`}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            {...register('password', { required: '비밀번호를 입력하세요.' })}
            className={`mt-1 block w-full border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md p-2`}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          로그인
        </button>
      </form>
    </div>
  );
};

export default Login;