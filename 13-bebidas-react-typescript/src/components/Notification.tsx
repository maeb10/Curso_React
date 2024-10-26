import { Fragment } from "react"
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline"
import { XMarkIcon } from "@heroicons/react/20/solid"
import { Transition } from "@headlessui/react"
import { useAppStore } from "../stores/useAppStore"
import clsx from 'clsx'

export default function Notification() {

    const notification = useAppStore(state => state.notification)
    const hideNotification = useAppStore(state => state.hideNotification)

    return (
        <div
            aria-live="assertive"
            className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
        >
            <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
                <Transition
                    show={notification.show}
                    as={Fragment}
                >
                    <div
                        className={clsx([
                            // Base styles
                            'pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5',
                            // Shared closed styles
                            'data-[closed]:opacity-0 data-[closed]:translate-y-2 data-[closed]:sm:translate-y-0 data-[closed]:sm:translate-x-2',
                            // Entering styles
                            'data-[enter]:duration-300 data-[enter]:ease-out data-[enter]:transform data-[enter]:transition',
                            // Leaving styles
                            'data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in',
                        ])}
                    >
                        <div className="p-4">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    {notification.error ? (
                                        <XCircleIcon className="h-6 w-6 text-red-400" aria-hidden="true" />
                                    ) : (
                                        <CheckCircleIcon className="h-6 w-6 text-green-400" aria-hidden="true" />
                                    )}
                                </div>
                                <div className="ml-3 w-0 flex-1 pt-0.5">
                                    <p className="text-sm font-medium text-gray-900">Notificación</p>
                                    <p className="mt-1 text-sm text-gray-500">{notification.text}</p>
                                </div>
                                <div className="ml-4 flex flex-shrink-0">
                                    <button
                                        type="button"
                                        className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        onClick={hideNotification}
                                    >
                                        <span className="sr-only">Cerrar</span>
                                        <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div >
        </div >
    )
}