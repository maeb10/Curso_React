import { Fragment } from 'react'
import { PlusCircleIcon } from '@heroicons/react/24/solid'
import { Dialog, DialogBackdrop, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import clsx from 'clsx'
import { useBudget } from '../hooks/useBudget'
import ExpenseForm from './ExpenseForm'

export default function ExpenseModal() {

    const { state, dispatch } = useBudget()

    return (
        <>
            <div className="fixed right-5 bottom-5 flex items-center justify-center">
                <button
                    type="button"
                    onClick={() => dispatch({ type: 'show-modal' })}
                >
                    <PlusCircleIcon className='w-16 h-16 text-blue-600 rounded-full' />
                </button>
            </div>

            <Transition appear show={state.modal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => dispatch({ type: 'close-modal' })}>
                    <TransitionChild as={Fragment}>
                        <DialogBackdrop
                            className={clsx([
                                // Base styles
                                'fixed inset-0 bg-black bg-opacity-75 transition',
                                // Shared closed styles
                                'data-[closed]:opacity-0',
                                // Entering styles
                                'data-[enter]:duration-300 data-[enter]:ease-out',
                                // Leaving styles
                                'data-[leave]:duration-200 data-[leave]:ease-in',
                            ])}
                        />
                    </TransitionChild>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <TransitionChild as={Fragment}>
                                <DialogPanel
                                    className={clsx([
                                        // Base styles
                                        'w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all',
                                        // Shared closed styles
                                        'data-[closed]:opacity-0 data-[closed]:scale-95',
                                        // Entering styles
                                        'data-[enter]:duration-300 data-[enter]:ease-out',
                                        // Leaving styles
                                        'data-[leave]:duration-200 data-[leave]:ease-in',
                                    ])}
                                >

                                    <ExpenseForm />

                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}