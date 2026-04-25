import './App.css'
import * as React from "react"
import {Button} from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {Separator} from "@/components/ui/separator.tsx"

function App() {
    return (
        <>
            <section className="card-section">
                <div className="card-inner p-4 h-full">
                    <div
                        className="text-center font-cinzel text-lg h-full px-4 py-10 flex flex-col justify-around border-solid border-2 border-[#e3cfdc]">
                        <div>
                            <div className="">Il battesimo di</div>
                            <div className="font-eyesome text-7xl mt-12 mb-6">Virginia</div>
                            <div>Domenica 24 Maggio 2026</div>
                        </div>
                        <div>
                            <div className="font-eyesome text-4xl">Cerimonia</div>
                            <div>
                                <div className="mt-8">Duomo di San Martino di Lupari</div>
                                <div className="text-[#af96a9]">Ore 11.00</div>
                            </div>
                        </div>
                        <div>
                            <div className="font-eyesome text-4xl">Festeggiamenti</div>
                            <div className="mt-8">
                                <div>Al Monte di Livio</div>
                                <div className="text-[#af96a9]">Via Fratta 83</div>
                                <div className="text-[#af96a9]">Colceresa VI</div>
                            </div>
                        </div>
                        <Drawer>
                            <DrawerTrigger asChild>
                                <Button variant="ghost" className="font-eyesome self-center">stai pensando ad un regalo?</Button>
                            </DrawerTrigger>
                            <DrawerContent className="font-cormorant">
                                <div className="mx-auto w-full max-w-sm">
                                    <div className="p-4 pb-0">
                                        <div className="text-lg mb-8">
                                            Se ti stai chiedendo cosa possa essere utile o gradito, ecco due idee
                                            semplici che puoi usare come spunto.
                                        </div>
                                        <Accordion
                                            type="single"
                                            collapsible
                                            className="max-w-lg"
                                        >
                                            <AccordionItem value="shipping">
                                                <AccordionTrigger>Per il suo futuro</AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="mb-8">
                                                        Virginia ha un fondo alimentato regolarmente da mamma e papà che
                                                        passerà nelle sue mani quando compirà 18 anni,
                                                        se vuoi contribuire:
                                                    </div>
                                                    <div className="flex w-full max-w-sm flex-col gap-2 text-sm">
                                                        <dl className="flex items-center justify-between">
                                                            <dt>IBAN</dt>
                                                            <dd className="text-muted-foreground">PIUSAH
                                                                PU3I2J23432432U4
                                                            </dd>
                                                        </dl>
                                                        <Separator/>
                                                        <dl className="flex items-center justify-between">
                                                            <dt>Causale</dt>
                                                            <dd className="text-muted-foreground">Fondo Virginia
                                                                battesimo
                                                            </dd>
                                                        </dl>
                                                    </div>
                                                </AccordionContent>
                                            </AccordionItem>
                                            <AccordionItem value="returns">
                                                <AccordionTrigger>Per i prossimi mesi</AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="mb-6">
                                                        Qui trovi alcune cose pratiche che userà subito: seggioloni,
                                                        giochi,
                                                        piccole grandi comodità per sopravvivere con stile ai primi
                                                        tempi.
                                                    </div>
                                                    <div className="mb-4">
                                                        Abbiamo creato una lista qui:
                                                    </div>
                                                    <Separator/>
                                                    <div className="mt-4">
                                                        <div className="flex w-full max-w-sm flex-col gap-2 text-sm">
                                                            <dl className="flex items-center justify-between">
                                                                <dt>Casa Del Bambino</dt>
                                                            </dl>
                                                            <dl className="flex items-center justify-between">
                                                                <dd className="text-muted-foreground">Via Vittorio
                                                                    Emanuele II, 16
                                                                </dd>
                                                            </dl>
                                                            <dl className="flex items-center justify-between">
                                                                <dd className="text-muted-foreground">San Martino di
                                                                    Lupari, PD
                                                                </dd>
                                                            </dl>
                                                            <dl className="flex items-center justify-between">
                                                                <dd className="text-muted-foreground">
                                                                    049 595 2414
                                                                </dd>
                                                            </dl>
                                                        </div>
                                                    </div>
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    </div>
                                    <DrawerFooter>
                                        <DrawerClose asChild>
                                            <Button variant="outline" className="self-center">Chiudi</Button>
                                        </DrawerClose>
                                    </DrawerFooter>
                                </div>
                            </DrawerContent>
                        </Drawer>
                    </div>
                </div>
            </section>
        </>
    )
}

export default App