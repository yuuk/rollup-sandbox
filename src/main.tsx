import React from 'react';
import classNames from 'classnames';

const cartButton1 =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAolBMVEUAAAD46iL45x306Tr56Sz46B355xz25nv45xz46B356Bz56CH56CP46Sj89m356B397E355xz45x745x746B/36CD66Sb55x/45xz55x/56SL36DH46j756CH77WL55xz46Bz55yD55yL56i355yD46CP+6TX55x345xz55xz46B346B346Bz66CX55x355x756B756Sb45xz45x346CL45xzatKb8AAAANXRSTlMASqkVJ5P1BuTez1RBLAenDfGafXNjO3fra0QdEVcK+chfUCJnSBfUw7GO6Lw2raKHNdi2S3NLvgkAAASsSURBVHja7NrrcqJAEAXgk9WISkAQvCELEUgIS27q9vu/WqqSqoAoVQO/uqn53uHMTPcZaJqmaZqmaZqmadqVUWBeeHiGQI5Z5DOXatzZqTBtCBO+TOgG9xOy2Eu6LU4gyltMLeYGJPGp1RiS3FOrDJLcU6uPCIL41GoaQhArplYWJPmkVgdI4iwm1GLpQBJjNd+6dMtpD2HGf3c/Mm9ONUfIY3yD7VHNDnKtL0Ii7glc2dej/5hCrOiVah4glz+UkLxdhARyjYYSEuOFKm4AuTyq8SHXOqbKAnI5LlVyUTNJwyNVJt76jpeno60+oXDm5ufAhpL/E+Jt4tlQ8bwl5uIMSnLibjqCin/EXgIVJveQqL5m0xlxt1K9SbhLVPeo3FlQYhJziqcWxtwPYNX9ulEQbwdgGCGxoCgh1soIiizeN0lhQFH4TpxlULYhxuIUygJibGtAWeoSX2eoC/8QW/EGGERI3GO3FTBbJbrY8x2uzujCORNXHjCIkGyDrmUiU3mETkKuISm69yQ8bbr3JCyVdwAwgJukexsY8XxuLVAjebu1wy/RPUkcoLMnjgdwn8I8nBI/S/TA8SbJgGGE5IgeEn4H8FVEpPYkPf+LvhI3B2AYIbHQILQnmY3QILQnWUZoENqT/EZE+kwyRoPQnmQaoSfrRJx8GOjJ4bUCXqE3nzhJ0SC0JykN9Dbm9HfrHQ1Ce5J4BwwiJK6FC2JXwCUapPYkVxGR2pP4wCBC8tXevTanCURhHH+qgEC5qUGNiIkTtd5iRqfn+3+1TtvpDG6EmcJZYTf7e+tLWZY9fy/HCRq5UEdcIwgU7SRnNBN1Zbr1hE+UjIluAIGineR1C4GinaQHgaqd5BkFCk+3nACNzbtwA95laCw5UvtGgB6LZI1qynyf5AKBop1kl4FB1n4nsZcQKNpJVgCgw04SQqBoJ7n2IVC0k9hL8NhTu3IIVO0kFgSKdhJ3CSZhvUXSfhfpWCcp7CJKH9xf3sBmQy1yIwgU7SRn8FnExIDna/jKjoCHFgSKdhIPAlU7yRmckj39p+4MfTuySGYTCBTtJD8GYLWYUTs+wGxErXByMAtfqA27Jbg9Uwu8C/itHHq01xAyvK3G9qj3IB+2/fQtgiyL/uOo9Su9RhP9MAjeMzxEZE2CiRWB3SLtufTH8DQOIdfG9ukv396AUyjs66fvkGYw9ajImw7AJDrQJ6d3yJG6JHJTsAiu8s4JoiSme+IEza0kllaR5dN9voWm0gc+YVselfEsmfPrA1glPpXzEzSRzahKCk4xVYnRRI8qDTPwSalaKjOMjMBm4FI1d4Dadgy9lW/iP0VdAQlkrndP4sxxRDf88c/5ek83jpLKhWPnQW47dGODmtx7W/nco6JAyr8FxVv8to2pyEY9IRWt78eSMXj4VBDfvyX7qCcv+XTkSsKMOaICZ4t/tg4VRAx5fV5yyflgYZVdQjZDcD9QQdk26UoIMHnZZTFpvv5m5S+wCKggKH3hi78j2qwRbe5a2uwj2uzs+jxrafP0q815RJ8TojZndn2mKNrMtfSZNOoz+9VnGq9PH9GnWGnUEDWquoZhGIZhGIZhGIaufgH1kd6Q0PL9GQAAAABJRU5ErkJggg==';
const cartButton2 =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAolBMVEUAAAD45x346iL46B356Sz06Dr66iX46Bz463j56CH56Bz56Sz55xz56Bz45xz56CP46B347WP55xz66CX860z46TH46B745xz55xz46B366CX36CD56ir56SL45x755x/46B/45yD55x/56CL55x356B396TX47D355x346B755yD87kL46Bz55x756CH46Bz55yD55x346B756B746Cb45xwpj/99AAAANXRSTlMA50qpIxYw6QZV8Sf10ONB3QrXNg0dmsT6lDtjKkR8d3Rwa1CiiRcQsJJnE72rWslgto+BLssmqNwAAAXESURBVHja7NvpbuIwAATgCaWbg9CSg5LShNIChZZeiJ33f7WV2B+2VVg5uFrbVT4Jcf5BZORjDDqdTqfT6XQ6nU6n0/nisokV10/wUBlv8lFCSTLKN3EEz6wnKY9IVvBLdMPj0gW8UlQ8YejXxTXnSTV8csuTXuCTW560zOCROU8KtvBIXfGkX/DJiid9wiflMuUJNyV8Et0Nw4TH5GN4pn5//OtlP6SkgH+iA0QzSh7hr6kSEr9mKYpxSmHSh7eyV0qu4a/5TwlJoYQE/tqmFD68G0mEaEIhaeCvGSVz+GtaUbiAv8qEwnANf31QSGfTnluaItJfobgsyXdNBC29lG5LZxl0PIV0XPUCLTldd7X9ASE5WEBH7HpIdGez/RFddwctE7puAS3PdF0NLTEdd3UJLfWQbtPdX482lKVhGAZBeKA+EjdBfhYciPsjjwLxSeV99ZWwOmszVw3J7XTQt62O87M6qAUlSxem8kVOIcygqR5RCFz4InFCYRNB0/qNkgHs259ZCt5T8g77dhSqPrQ1lNzYLxO3SkQiaOsnFHL7R1MWCYUd9K0v3CoTVxSqe8DbkLxSSIqzt4BvM9hVXlEI0MbYqS3gXtuICOWOkinsWlEyQyv3Lh1LmVAIG7QydagnKUMKeYZW1kqZaDckRUVhY9STXMOmPSX3aMmhxn1CIegZ/Z5LWFQmRkNBpvQkW9hTUHJh1pME54XEjcZ8RckDrMmUtUiD1pqUwhuseVIi0kdr64BCHqEtd44wKBODArY8qJMl+BqS8sL4LNwicSEk45FORPR7kitYcq2eFzVeYKYDWKFG5PMblvx3sGNJyW+cJab9YymDnMLoEmepczkkGWzoaW4V6vck1Rg2zAwiIuzt7259z3b6wvop4Hr45eo2D0kJM8aD8jIymB5Y7kn2lNx905omxv+3o6SPszWUPGcwYN6LBAYhHYR2e5L4n/NWj3oSZZL0CAMPVkcStRepYWBqNSSZ2ouYGFvdAu4p7TpMlDubf7paUTK3v67509699iYKRGEAfpVWUa5WtAvUSxPjvW5jPf//r222m03AdaYbOTPAdJ6vJn6RgTPvC8jTi2SMYUwKrUZ9xkDqUOMiyaS9SIt6kg/WPGrB0JMwLJEwYk0sV9BoVAp917xfd8D/aEYvcu35np6kCb1IUyLgUi/iR6hs5teTbh2GzCf+Taeet6X0pL1Ii3qS616krYskeZOOq+3pSSZhaYmwVy0xNBmXt3T8G04PX2lOLyKNAPbQwnXKvQiLgfpxS96LPD2qKFtc6DBTcndoDT3JUppDtagnkcfn7elJeHoReU8SJxBqWi8iHxceINb0g3mhuyfZCp4XYS2Jzy4k+HuR0AWbck8SeT21JkvpnMrWk/gd1UjZUPRKteAfUzOqTQxOE5/q8gZOyZbq8goYsUj6GViNqRb8N+pu+lSPFZhNqRb+AMwuP6gOx88Rvv3LPR6D38kn3X5eoMLD6SOdOpqs0nTZHUGVw6M+7XpLr1XFoRdF4wm0cL0syjwX7Da5E9Kn4XF+gVrdXUB/BLsuOF2mVHIcQBl3EVNRvHDBZHSmfxzHUCMP6VqYg0X0RLcsoUDi0C1OgureSWAKdl5AtwUeqso1TtheTCKxx5BfC53BKglILEhQxaRPMjk4OSTjKPxuGk7AJye5nOPA0rDg3ZAEGDLgZ/rKC2viL7dgeJhRw3qPFWaOUyoJ5t3ZfkslHTDpUomfDqJB6lNJF3cKb13KZzEVReCxoyJnjd/WDhXtcJ8XKtoXypKCOXgEVODcPm0GuM9JcBp/V5Axu1Tgr/HX2qcCl+FhxpngkAvAwhPdup4yFO5nKhBdJkMFBcxAdCNMVv3fuvriD/gfW4+EH3zzX8SYNWLMWcuY64gxV3ZzZi1jpl9j9iPm7BCN2bObk6IYk2uZkzSak/2ak8ab04+Y01gZ1CEa1OpalmVZlmVZlmVZpvoFzkcIIt/IBdYAAAAASUVORK5CYII=';
const cartButton3 =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAvVBMVEUAAAD993P/+LL55xz77Ev55xz55xz46CH55xz46Bz45xz46Bz55xz46Bz56B336DD77T756Cb66i/661r56Bz55x356CL56SL46Cv55xz45xz97Dr46CP46Bz56CX46CD56CD66Cf45x356B356B745x/46Sj45xz45x755x756B/66SX46B756B/56B755x/45x745x346CL56Bz45xz////67VX78Xf++9r89qj89Jz884/56z356TH78n9zwndHAAAANHRSTlMABwT5DfTuVvf94r7M3LMbEjUgC9GsT0Io18cVSOY6ZF4wuaV+ci3qlI5sPYV2immankvxrAXCFQAABjBJREFUeNrt3dd24jAUheHtgh0b40LvvYSSyZSdyfT3f6zpbY0JGI5sMYvvKrf/CpKMQAJXV1dXV1dXV4eZpmnE1fak1Rwt7kZuK2lHsWGaJi6IXe1v1o3Ad0pf3Pz05W/H7zae3ferNrRnDBehP3BelbhX6dVq0AnvJvr+b+zhotFxeBzL6TQWQ+gnar4IBszGGgS3zQga6bV2QYknsYL5VpMXmbnclC2eYTVdtA0UzX4583k2f9a3USS7WaaQcrO4FHscUFDgFpNSu69QWGWUf4rp+lSg4prIVXtqUQkrnCA/0c6hMqVdhHzUXN+jSvVxDTmYzCyqNltCNcOtMAd1F2rFc4+5cOY2FFqGzE3YhjJNnzmqNKGGsWa+vGcmFKhNmbvQgLhemQWY9iCsXWYhylWImgQsSHcJQcOAhekmELOts0D1IYQkdRYqWEJEu8uCdasQ0JuycGUbZ7NDaiA0ca4GtTDDmW6piWc4y4La2OAMLYvacFo4WbVOjXR7OJH9glpZGzjNhppZ4CT9FTWzauEEba0GyHdBhMzMNTW0Rmb9EjV0s0VGcUAtdQ1kc6fRUvgnb4NMqtrNWD850SU+86Z5gQz6N9SWl+BohoZLyG/lGo7VpNZe4kiGplNv5nfwLynp4+O7d48fKchr4ShGmYLeP3zznoIaNo6xpaC3Dz+8pZzSFkeozSjn8eGXR8ppGDgsoaA3v0PeUI4zzHkD6MPDHz5QznMcVO1Qzus/Q15TTqWNQ0YUoDyE9zggDilAfUiIA5ISBagPGSS57JGqD+EcT+p1KUJ9SJDPloP6kFIfT3lOGepDeJvP3on6EN/Efq0BhagPcZbY745S1IdY97lsnqgPYQN7GR2KURtyYJAMHYpRH2JVcxki6kO8cS5DRH0IZyb2qFOQ+pC6gXS1FQWpD3H2hVQdClIf4kVI1yxRkvqQIdLNLQpSH8IR0s0oSn3I2kCqLkUpDtm/m20MKEp9iB8jTVyiKPUhVg9pqhcXwghplpcX0kaa7Q1P8eH1fp/+DPn0er8PPEmCNK1TQh7fPIh488gTtJDGPSHk7YOYt8yujzSj7CHvHwS9Z2Yu0iwyh3x8EPWRWY2Qwsj+qPUoG/LIrDZIUVszq3eyIe+Y1d3/EjJHCmN3eS+tu2PejlzCYL9HmvvLm37H/8uC2ESa5v/yiHKBD41DpEluKEv9Y/wEadr/y/uR6OJC9uzQ1RyKUh/ixEjVoSj1IYGNVCFFqQ95UUOq9aVtmc6RbnRDSepDXKSbvKIk5SHeEul6F/b5iBUjnTmgIPUhAwN7lClIfcjUxB47ClIe4t1hn/5lfWFgiX3sCsWoD1kZ2CukGPUh4X/yNSdvgf1aKwpRH+JMsF9UpxD1IX5+VzyoDXmBpzQtylAe8uolnhIFFKE+pG7iSXOKUB/yDE/brihBechqi6eZUwpQHzI1c7nSRX3IBoe0fQpQHVJZ4hBjRikKD4vNjFyv2VF2fO+mj8PsKaUoO1A5jXM+BK7oiKvXxDHsgGLUHDouxziKSzkqjoGziePYFWqtG+NIY2rNxbFsnxoLbBxt7FFffRzPLFNbIbJItL3hxaoik2fU1A7ZVDWdgjsxfrjsKdgaI6ualhc6NZBdouFiUpngBCPqpjTGKQztZq5bnCbWbFkMY5xoMqBGKlWczKU+LBd/udgF/pn5P1yJTTYMnKWmyYDv1nCmqPDr778KajjbUoO7DjtVCNh2WLBKcom/MfQvvw8h7oAFGrgQ06+wMH4TgpIOC9JJkOLy7sIPqhAWd3ksrdbBf9VC5q5RgwLmzmKurLUBNcYV5kbtD6EmIXMzXUKh3q7EXJRue1Br7DMHlTGUG5apmjdNkAN7s6JS/gY5iZ57VOd5hPxMylSk3EauDNenAh3XRN56mwqF1Tc9FMDsueUbivHKbg9FiV+GDkU4jVaMItWGzzsCQ+PF0Ebh2vfhgGcYhKO2CT0k8+4rnsTpzhNopXVbcSxmYjmV2xY01L6fdUoej+KVOrPRBNoyI/d53fG8Jxs8p/7cjXQZFnuZhhENR+uyb/Efll9+Nh5GhoGLYdhxr5q0+u5osbu93d3duy+3k2rPti+o4erq6urq6qownwF/4vGrTbWCoQAAAABJRU5ErkJggg==';
const cartButton4 =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAsVBMVEUAAAD46CP56Bz55xz55xz56B/45xz68Gv/+bD86zv55xz66Sf56Sz46jD37Eb993D56SX55xz46Bz77T/97FP56i/55x756B745x/46jL56B/56CT46Bz45x356B745xz46Bz45yD46CP56B346Sr56B356B746Cf55xz45x356CD46Sj56Bz46B356Bz56B356CD56CH45x356B345x745xz46B346CH56SL56CL45xzBBuI3AAAAOnRSTlMAQvv59WrjCQQV8DAoHA4HPNfbEQwgkH1yGXY36LmE7L1kSasknos0z8xfLMek0rNWTsKvmd+UWkRSOZ7n4QAACetJREFUeNrsm9l2qjAUhjcyySQ4oCgqDqhVtNXqccj7P9gZrhKGGiRAzlp+q1ddSPOzpz/Bwps3b968efPmzXOazaatWaEhPObeaP4QNuGwa//5JfxHtNyF3D9vFV36h/j35x+6sl+u5YXbA+6xHe+sKLouoUwkfay0zyOD39i0HG/5GSA6GkF76TnAH8PHaqugfIjjj+tpCByhCdOthF5C3E4dTpKsGXkzERVgPPFMG+qmdTooqDDKYdGCOmmdZogRs1N9Ulq7LWLI9liPlN68gxjTmVc/KptHBZVA51hxCzMnIu3kEyVdl8QG7eVfBlTHcKo/W097uZZP/sYwosj8QxQZxsZfyOvl5zNJ0rSqGdm7KT8t5tfX+ugYYcZqtNBwduvJj+X1caukVIxldlZ9LgcLQ6N4FsZi9FNsDhGUjX3sZGWTMpmbuersNskM7ecDykUbZPxp/WNkvBDd0V7PuN+g1KFifGUEo3/vvRjh+zUjLF8mlMZDSS/vgQYF6A5+pd/2BOWg9tNnmFc4CVqekhrodSnTsTdBKbTnNjDA3nVS00sF5mjfKEkg28ziLQcoyUQDxoRpOlYhMCQ6pLl7F5hipBj2/cMGptjHT5TgOwKG+Ck61hYwJ+ynPC8fmOEkn5Sys6EE1Ns4ab2YKdl8JAPuQ0k4naQSRtll7hMNvq9BaWgXKZFdLpMbJ+aHtIMyad70RO9i4OtbCXs1NqBk/CAxGYvP+GXCkkRQOmbCfR2gINdEmbtQAW6iLtdQCA/FOFtQCVYio2UogCAikosGFaGtEEkgFAhwfBBe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';
const addCartBtn =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAABaBAMAAAAlRDcPAAAAMFBMVEUAAAAHBwcEBAQCAgIAAAAAAAAAAAABAQEAAAAHBwcAAAAAAAAAAAD///9AQEBwcHACh9yuAAAADHRSTlMACxYfxTuHWXL3p9w0c2tfAAAC3klEQVRYw92XP28TQRDFfeRvubNJcFqvRZQS+0AIkQZFgISucGQKIDQIyaJIgwwCRW6iCIRQWhCFRUFaV9AhKuL8wyu+gemRwN8AxNxx2dnz3d4cbV6R2NZPz2/ersZ26ZTp0rPWwyeNYuyZzUBHutkuCZZeDrTRjfOel0/f0ra+NgRL2+o3RI7/BcMZ/5p7gNmuTumN034i0BladfHrOkuDtew4M12dqaNs+w3t0P0sflq7dAAZ5h3t1JZIpZ/Sbr2G1LRXcvBBLeUe6BxdBSH4QalLGLO/nIsfr42597TOT8P2YusQEvykTujdaNRN3nsA+2TvJfFfw+FPndAje1jRY/BklROaw/fs8DMsfmSHn2TxfsUKv8LiukbuXofHt0BQMTz+3qom4PEPVA1oHv9iqvGmCuD7VM1CAfywYqop08UeRfo9HP6JHvygcyL3WfPit2FS32l7VE6q8aaL4OrEXRTHI50thkPsvljQXfxHMyaMVy7Su3EXc0VOldyhAL5H7vCZxz9a7j0e36Vj8nZ4fNv07sEKjzct93l+E9TpRsIiv2cQN5tgjsX3bXcIOHwXcbNooMPh7TptAgHz3H73lbVnoMx9eoS4GZXCO4TR7QUPd3Lp4ybiFo3N5+nAr4O1gUtMmtU4OoVfz6EHmEWKBL/QzesFo9u0B2rHjW/7Ko5Owy7lDRofEtlLueHCH1AWSgPLDvqtT1no2kjl+B7Z9ulILXt5LrP7a2gu6TpS9Wop6zsw0hVDUxocVt1N0f0m1iJNFhKgffXxON2OzGlQujehfXUzRWPnlCXZpVT+bWve682QDjunLFZ6qCjlX3wVb8xPz30U0iZ5igelEHn6otV6ic4hTSWmecD4quob1VUY3PFryMP4ob+qG7gCdKCZcSTOi0IUBZgEO3PiyKOfVJHwIXm7/CMI//z7LxzedFoQwlICSuBzRvjmEKuEnbDyTFoOpkYFeBj7dOkvUJqgNmP6pmgAAAAASUVORK5CYII=';



export const GoodsItem = (props) => {
    const {
        goods,
        mode,
        imageRadius,
        align,
        goodsName,
        goodsPrice,
        addCartButton,
        addCartButtonStyle,
        onLink,
        onAddCart,
        tileLayout,
        hoverStyle,
        hoverGrow,
        hoverBorder,
        hoverShadow,
    } = props;

    const handleClick = () => {
        onLink(goods);
    };
    return (
        <>
            {mode === 'tile' && tileLayout === 'row-1' ? (
                <div
                    className={classNames(
                        'dw-list dw-flex dw-items-center dw-w-full dw-h-full dw-cursor-pointer dw-box-border dw-border dw-border-transparent dw-border-solid dw-overflow-hidden',
                        {
                            'cq-pc:hover:dw-shadow': hoverStyle && hoverShadow === 'open',
                            'cq-pc:hover:dw-border-[#ececec]': hoverStyle && hoverBorder === 'open',
                        }
                    )}
                    style={{ borderRadius: imageRadius === 'rightAngle' ? undefined : '6px' }}
                    onClick={handleClick}
                >
                    <img
                        alt=''
                        className={classNames('dw-list-left dw-w-112 dw-h-112 dw-duration-300', {
                            'cq-pc:dw-transition-all cq-pc:hover:dw-scale-110':
                                hoverStyle && hoverGrow === 'open',
                        })}
                        src={goods?.pic}
                    />
                    <div
                        className={classNames(
                            'dw-list-right dw-relative dw-flex dw-flex-col dw-px-8 dw-flex-1',
                            {
                                'dw-text-left': align === 'left',
                                'dw-text-center': align === 'center',
                            }
                        )}
                    >
                        <div className='dw-my-8 dw-h-32 dw-text-black dw-line-clamp-2 dw-font-bold dw-text-12'>
                            {goods?.brand}
                        </div>
                        {goodsName && (
                            <div className='dw-h-32 dw-mb-6 dw-text-black dw-line-clamp-2 dw-text-12'>
                                {goods?.name}
                            </div>
                        )}
                        {goodsPrice && (
                            <>
                                <div className='dw-mb-2 dw-h-13 dw-text-10 dw-line-through dw-text-gray-300'>
                                    {Boolean(goods?.goodsMvo?.linePrice) && (
                                        <div>{`${goods?.goodsMvo?.linePrice?.name} ${goods?.goodsMvo?.linePrice?.symbol} ${goods?.goodsMvo?.linePrice?.value}`}</div>
                                    )}
                                </div>
                                <div className='dw-text-dfs-red dw-h-32 dw-text-12 leading-none'>
                                    {`${goods?.goodsMvo?.salesPrice?.name} ${goods?.goodsMvo?.salesPrice?.symbol} ${goods?.goodsMvo?.salesPrice?.value}`}
                                </div>
                            </>
                        )}
                        {addCartButton && (
                            <div className='dw-flex dw-justify-end dw-pb-8 dw-w-full'>
                                <img
                                    alt=''
                                    className='dw-w-20 dw-h-20'
                                    src={
                                        addCartButtonStyle === '1'
                                            ? cartButton1
                                            : addCartButtonStyle === '2'
                                            ? cartButton2
                                            : addCartButtonStyle === '3'
                                            ? cartButton3
                                            : cartButton4
                                    }
                                    onClick={() =>
                                        onAddCart({
                                            data: {
                                                csku: goods?.goodsMvo?.csku,
                                            },
                                        })
                                    }
                                />
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <div
                    className={classNames(
                        'dw-w-full dw-h-full dw-cursor-pointer dw-bg-white dw-overflow-hidden dw-relative dw-pb-3 dw-box-border dw-border dw-border-transparent dw-border-solid',
                        {
                            'dw-mt-10 dw-pb-10 cq-pc:dw-pb-12 cq-pc:dw-mt-12': mode === 'scroll',
                            'cq-pc:hover:dw-shadow': hoverStyle && hoverShadow === 'open',
                            'cq-pc:hover:dw-border-[#ececec]': hoverStyle && hoverBorder === 'open',
                        }
                    )}
                    style={{ borderRadius: imageRadius === 'rightAngle' ? undefined : '6px' }}
                    onClick={handleClick}
                >
                    {goods?.soldOut && (
                        <div
                            className='dw-absolute dw-left-0 dw-top-0 dw-right-0 dw-bottom-0 dw-bg-[rgba(255,255,255,0.4)] dw-z-2'
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className='dw-mt-68 dw-flex dw-justify-center'>
                                <div
                                    className={classNames(
                                        'dw-h-28 dw-leading-28 dw-pl-10 dw-pr-10 dw-text-15 dw-text-dark-gray dw-bg-white dw-text-center',
                                        'cq-pc:dw-text-16 cq-pc:dw-font-medium'
                                    )}
                                >
                                    已售完
                                </div>
                            </div>
                        </div>
                    )}
                    <img
                        alt=''
                        className={classNames('dw-w-full  dw-mb-27', {
                            'cq-pc:dw-transition-all cq-pc:dw-duration-300  cq-pc:hover:dw-scale-110':
                                hoverStyle && hoverGrow === 'open',
                        })}
                        // @ts-ignore
                        mode='widthFix'
                        src={goods?.pic}
                    />
                    <div
                        className={classNames('dw-relative dw-flex dw-flex-col dw-px-8', {
                            'dw-text-left': align === 'left',
                            'dw-text-center': align === 'center',
                            'dw-items-start': align === 'left',
                            'dw-items-center': align === 'center',
                        })}
                    >
                        <div
                            className={classNames(
                                'dw-mb-4 dw-leading-16 dw-text-black dw-line-clamp-1 dw-font-bold dw-text-12',
                                'cq-pc:dw-text-18 cq-pc:dw-h-28 cq-pc:dw-leading-28 cq-pc:dw-font-medium cq-pc:dw-mb-12'
                            )}
                        >
                            {goods?.brand}
                        </div>
                        {goodsName && (
                            <div
                                className={classNames(
                                    'dw-h-28 dw-line-clamp-2 dw-text-11 dw-leading-14 dw-text-catalog-gray dw-mb-10',
                                    'cq-pc:dw-h-48 cq-pc:dw-text-16 cq-pc:dw-mb-22.5 cq-pc:dw-leading-24'
                                )}
                            >
                                {goods?.name}
                            </div>
                        )}
                        {false !== goods?.showColor && (
                            <div
                                className={classNames(
                                    'dw-flex dw-items-center dw-justify-center dw-mb-13  dw-h-17',
                                    'cq-pc:dw-text-16 cq-pc:dw-mb-23.5'
                                )}
                            >
                                {goods?.styles && goods?.styles?.color && (
                                    <>
                                        <div
                                            className={classNames(
                                                'dw-w-10 dw-h-10 dw-rounded-lg dw-mr-8 dw-flex-none',
                                                'cq-pc:dw-w-18 cq-pc:dw-h-18 cq-pc:dw-rounded-18'
                                            )}
                                            style={{
                                                backgroundColor: goods?.styles?.hexCode
                                                    ? goods?.styles?.hexCode
                                                    : '#c8c9cc',
                                            }}
                                        />
                                        <div
                                            className={classNames(
                                                'dw-text-left dw-h-17 dw-leading-17 dw-text-[9px] dw-text-black dw-line-clamp-1',
                                                'cq-pc:dw-text-16'
                                            )}
                                        >
                                            {goods?.styles?.color}
                                        </div>
                                    </>
                                )}
                            </div>
                        )}
                        {goodsPrice && (
                            <>
                                <div
                                    className={classNames(
                                        'dw-mb-3 dw-h-14 dw-line-clamp-1 dw-text-[9px] dw-line-through dw-text-light-gray',
                                        'cq-pc:dw-h-24 cq-pc:dw-leading-24 cq-pc:dw-text-15 cq-pc:dw-mb-4.5'
                                    )}
                                >
                                    {Boolean(goods?.goodsMvo?.linePrice) && (
                                        <div>
                                            {`${goods?.goodsMvo?.linePrice?.name} ${goods?.goodsMvo?.linePrice?.symbol} ${goods?.goodsMvo?.linePrice?.value}`}
                                        </div>
                                    )}
                                </div>
                                <div
                                    className={classNames(
                                        'w-full dw-text-dfs-red dw-h-18  dw-line-clamp-1 dw-text-10  dw-mb-10 dw-leading-18',
                                        'cq-pc:dw-text-16 cq-pc:dw-font-medium cq-pc:dw-mb-22'
                                    )}
                                >
                                    {`${goods?.goodsMvo?.salesPrice?.name} ${goods?.goodsMvo?.salesPrice?.symbol} `}
                                    <div
                                        className={classNames(
                                            'dw-inline-block dw-text-14 dw-leading-[18px]',
                                            'cq-pc:dw-text-16 cq-pc:dw-font-medium '
                                        )}
                                    >
                                        {goods?.goodsMvo?.salesPrice?.value}
                                    </div>
                                </div>
                            </>
                        )}
                        {addCartButton && (
                            <div className='dw-flex dw-justify-center dw-w-full'>
                                <img
                                    alt=''
                                    className={classNames(
                                        'dw-w-24 dw-h-24',
                                        'cq-pc:dw-w-32 cq-pc:dw-h-32'
                                    )}
                                    src={addCartBtn}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onAddCart({
                                            data: {
                                                csku: goods?.goodsMvo?.csku,
                                            },
                                        });
                                    }}
                                />
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};
