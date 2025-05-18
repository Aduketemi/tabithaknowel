import { Button } from "./shared/Button"
import { useModal } from "../contexts/ContactContext"

export const Footer = () => {
    const { openModal } = useModal();

    return (
        <section className="py-20 px-10 bg-primary text-white text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Begin Your Study Abroad Journey?</h2>
            <p className="text-lg mb-8">
                Our team is here to help you every step of the way.
            </p>
            <Button onClick={openModal} className="bg-white text-primary font-bold text-lg px-6 py-3 rounded-xl">
                Schedule a Free Consultation
            </Button>
            <div className="mt-4">
                <span>
                    Photo by <a href="https://unsplash.com/@goodfacesagency?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Good Faces</a> on <a href="https://unsplash.com/photos/woman-in-black-long-sleeve-shirt-using-smartphone-DavJROC1lBM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </span>
            </div>
        </section>
    )
}