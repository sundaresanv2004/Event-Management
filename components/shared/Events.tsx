import styles from "@/app/styles";

const Events = () => {
    return (
        <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className={`flex ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                Events
            </div>
        </section>
    );
}

export default Events;