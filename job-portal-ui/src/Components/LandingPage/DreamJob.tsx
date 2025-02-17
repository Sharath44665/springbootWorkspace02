import { Avatar, Container, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
const DreamJob = () => {
    return (
        <>
            <Container size="lg">
                <div className="flex items-center">
                    <div className='flex flex-col w-[45%]'>
                        <div className="text-6xl font-bold capitalize [&>span]:text-blue-700">find your <span>dream job</span> with us</div>
                        <div className='text-lg'>The whole secret of a successful life is to find out what is one’s destiny to do, and then do it</div>
                        <div className='flex gap-2'>
                            <TextInput className='rounded-lg p-1 px-2'
                                label="Job title"

                                placeholder="Software Engineer"
                            />
                            <TextInput className='rounded-lg p-1 px-2'
                                label="Job Type"

                                placeholder="full time"
                            />
                            <div className='flex items-center justify-center pt-4 hover:text-blue-700 cursor-pointer'>
                                <IconSearch stroke={2} />
                            </div>
                        </div>
                    </div>
                    <div className='w-[55%] flex items-center justify-center'>
                        <div className="w-[30rem] relative" >
                            <img src="/Boy.png" alt="boy image" />
                            <div className='absolute -right-10 w-fit top-[50%] border border-gray-200 rounded-md p-1 backdrop-blur-md'>
                                <div className='text-center capitalize text-sm'>2k+ got job</div>
                                <Avatar.Group>
                                    <Avatar src="avatar1.png" />
                                    <Avatar src="avatar2.png" />
                                    <Avatar src="avatar.png" />
                                    <Avatar>1k+</Avatar>
                                </Avatar.Group>
                            </div>
                            <div className='absolute -left-10 w-fit top-[32%] border  border-gray-200 rounded-md p-1 backdrop-blur-md'>
                                <div className='flex gap-2 items-center'>
                                <div className='w-12 h-12 p-1'>
                                    <img src="/Icons/Google.png" alt="google" />
                                </div>
                                <div className='text-sm '>
                                    <div>Software Engineer</div>
                                    <div className='text-xs'>New york</div>
                                </div>
                                </div>
                                <div className='flex gap-2 text-xs justify-between'>
                                    <span>1 day ago</span><span>120 applicants</span>
                                </div>
                                
                            </div>
                        </div>

                    </div>
                </div>
            </Container>
        </>

    )
}

export default DreamJob;