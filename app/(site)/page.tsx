import Image from 'next/image'
import Header from '@/components/Header'
import ListItem from '@/components/ListItem'

export default function Home() {
    return (
        <div className="bg-neutral-900 rounded-lg w-full h-full overflow-hidden overflow-y-auto">
            <Header>
                <div className="md-2">
                    <h1 className='text-white text-3xl font-semibold'>Welcome Back</h1>
                    <div className="
                        grid 
                        grid-cols-1 
                        sm:grid-cols-2
                        xl:grid-cols-2
                        2xl:grid-cols-4
                        gap-3
                        mt-4">

                        <ListItem />
                    </div>
                </div>
            </Header>
        </div>
    )
}
