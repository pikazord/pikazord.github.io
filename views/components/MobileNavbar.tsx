import Link from "next/link"
import { Button } from "./shared/Button"
import { Sheet, SheetContent, SheetTrigger } from "./shared/sheet"
import menuItems from "@/config/menuItems"
import { HiOutlineMenuAlt3 } from "react-icons/hi"

export function MobileNavbar({ pathname }: { pathname: string }) {

	return (
		<div className="block lg:hidden">
			<Sheet>
				<SheetTrigger asChild>
					<Button variant="secondary" className="p-[6px]"><HiOutlineMenuAlt3 size={24} className="text-primary-80" /></Button>
				</SheetTrigger>
				<SheetContent className="z-[110]">
					<div className='flex flex-col gap-3 pt-5 justify-center items-center'>
						{
							menuItems.map(menuItem => {
								return (
									<Link key={menuItem.href} href={menuItem.href} className={`text-sm font-semibold border-b w-full text-center pb-2 ${pathname === menuItem.href ? 'border-primary' : 'border-secondary-15'}`}>
										<SheetTrigger asChild>
											<p>
												{menuItem.label}
											</p>
										</SheetTrigger>
									</Link>
								)
							})
						}
					</div>
				</SheetContent>
			</Sheet>
		</div>

	)
}
