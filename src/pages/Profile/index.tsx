import { UserContext } from '@/context';
import useMutation from '@/hooks/useMutation';
import { changePasswordRequest } from '@/services/profile';
import React, { FunctionComponent, useContext, useMemo } from 'react';
import { useForm, useWatch } from 'react-hook-form';


const Profile: FunctionComponent = () => {
  const { userProfile } = useContext(UserContext);
  const { register, handleSubmit, control, reset } = useForm();

  const oldPassword = useWatch({ name: 'oldPassword', control });
	const newPassword = useWatch({ name: 'newPassword', control });
  const idUser = userProfile?._id


  const createChangePasswordMutation = useMutation(changePasswordRequest, {
    showLoadingBackdrop: true,
    handleErrors: false
  });

const isDisabled = useMemo(() => !!oldPassword && !!newPassword, [oldPassword, newPassword]);

const onSubmit = handleSubmit(() => {
  createChangePasswordMutation
    .mutateAsync({ idUser, oldPassword, newPassword,})
    .then(response => {
      console.log(response);
      alert('Contraseña cambiada con exito!')
      reset();
    })
    .catch(err => {
      console.log(err);
      alert('No se ha podido cambiar la contraseña, verifique la contraseña ingresada.')
    });
});

  return (
      <div className="w-full px-4">
        <div
          className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded-lg bg-slate-100 border-0"
        >
          <div className="rounded-t  bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-slate-700 text-xl font-bold">
                Mi Perfil
              </h6>
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form>
              <h6
                className="text-slate-400 text-sm mt-3 mb-6 font-bold uppercase"
              >
                Información del Usuario
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-slate-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Usuario
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      defaultValue={userProfile?._id}
                      disabled={true}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-slate-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      defaultValue={userProfile?.email}
                      disabled={true}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-slate-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      defaultValue={userProfile?.name}
                      disabled={true}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-slate-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Apellido
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      defaultValue={userProfile?.lastName}
                      disabled={true}
                    />
                  </div>
                </div>
              </div>

              <hr className="mt-6 border-b-1 border-slate-300" />

              <h6
                className="text-slate-400 text-sm mt-3 mb-6 font-bold uppercase"
              >
                Informacion de Rol
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-slate-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Rol
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      defaultValue={userProfile?.role}
                      disabled={true}
                    />
                  </div>
                </div>
              </div>
              <hr className="mt-6 border-b-1 border-slate-300" />
              <h6
                className="text-slate-400 text-sm mt-3 mb-6 font-bold uppercase"
              >
                Cambiar contraseña
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-slate-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Contraseña actual
                    </label>
                    <input
                      type="password"
                      {...register("oldPassword")}
                      className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-slate-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Nueva Contraseña
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      {...register("newPassword")}
                    />
                  </div>
                </div>
                  
                <div className='w-full lg:w-3/12 flex justify-end px-4 mt-2'>
                  <button
                        className="bg-blue-500 w-full text-white disabled:opacity-60 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                        type="button"
                        disabled={!isDisabled}
                        onClick={onSubmit}
                      >
                       Cambiar contraseña
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Profile;
