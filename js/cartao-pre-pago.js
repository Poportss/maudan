$(document).ready(function () {
    let scrollPosition = localStorage.getItem('scrollPosition');

    if(scrollPosition || scrollPosition >= 0){
        window.scrollTo(0, scrollPosition);
    }

    $(".carousel-beneficios").slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        adaptiveHeight: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
        ],
    });

    $(".carousel-convenio").slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        adaptiveHeight: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
        ],
    });

    let slidesPorPagina = $(".carousel-beneficios .slick-active").length;
    let porcentagem = ((slidesPorPagina - 1) * 100) / 5;
    $("#progress-slides").css({ width: porcentagem + "%" });

    $(".carousel-beneficios").on("beforeChange", function (event, slick, currentSlide, nextSlide) {
        let slidesPorPagina = $(".carousel-beneficios .slick-active").length;
        let porcentagem = ((nextSlide + (slidesPorPagina - 1)) * 100) / 8;
        $("#progress-slides").css({ width: porcentagem + "%" });
    });

    $(".carousel-beneficios").on("afterChange", function (event, slick, currentSlide) {
        let slidesPorPagina = $(".carousel-beneficios .slick-active").length;
        let totalSlides = slidesPorPagina + currentSlide;

        if (totalSlides >= 6) {
            $(".carousel-beneficios").slick("slickGoTo", 0, true);
        }
    });

    $("#convenio-envio").hover(function () {
        envioDataLayer();
    });

    $("#convenio-remessas").hover(function () {
        remessaWesternDataLayer();
    });

    $("#convenio-recebimento").hover(function () {
        recebimentoDataLayer();
    });

    $("#convenio-como-funciona").hover(function () {
        comoFuncionaDataLayer();
    });

    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        localStorage.setItem('scrollPosition', scroll);
    });
});

function next() {
    $(".carousel-beneficios").slick("slickNext");
}

function prev() {
    $(".carousel-beneficios").slick("slickPrev");
}

function setDirection() {
    infCompleDataLayer();

    let down = $(".icon-down").length;
    let up = $(".icon-up").length;

    if (down > 0) {
        $(".icon-top-bottom").removeClass("icon-down");
        $(".icon-top-bottom").addClass("icon-up");
        $("#separar-info").hide();
    } else {
        $(".icon-top-bottom").removeClass("icon-up");
        $(".icon-top-bottom").addClass("icon-down");
        $("#separar-info").show();
    }
}

function cartaoDataLayer() {
    dataLayer.push({
        event: "ga.custom_event",
        "custom.category": "bradesco_cambio",
        "custom.action": "home_card_produtos_e_servicos",
        "custom.label": "cartao_pre_pago",
    });
}

function moedaDataLayer() {
    dataLayer.push({
        event: "ga.custom_event",
        "custom.category": "bradesco_cambio",
        "custom.action": "home_card_produtos_e_servicos",
        "custom.label": "moeda_estrangeira",
    });
}

function remessasDataLayer() {
    dataLayer.push({
        event: "ga.custom_event",
        "custom.category": "bradesco_cambio",
        "custom.action": "home_card_produtos_e_servicos",
        "custom.label": "remessas_internacionais",
    });
}

function acessarContaDataLayer() {
    dataLayer.push({
        event: "ga.custom_event",
        "custom.category": "bradesco_cambio",
        "custom.action": "cartao_pre_pago_consultas_e_recarga",
        "custom.label": "acessar_sua_conta",
    });
}

function saibaMaisDataLayer() {
    dataLayer.push({
        event: "ga.custom_event",
        "custom.category": "bradesco_cambio",
        "custom.action": "cartao_pre_pago_informacoes",
        "custom.label": "perda_ou_roubo_saiba_mais",
    });
}

function infCompleDataLayer() {
    dataLayer.push({
        event: "ga.custom_event",
        "custom.category": "bradesco_cambio",
        "custom.action": "cartao_pre_pago_informacoes",
        "custom.label": "informacoes_complementares",
    });
}

function agenciaProximaDataLayer() {
    dataLayer.push({
        event: "ga.custom_event",
        "custom.category": "bradesco_cambio",
        "custom.action": "cartao_pre_pago_info_complementares",
        "custom.label": "saiba_mais_acesse",
    });
}

function envioDataLayer() {
    dataLayer.push({
        event: "ga.custom_event",
        "custom.category": "bradesco_cambio",
        "custom.action": "convenio_western_union",
        "custom.label": "envio",
    });
}

function remessaWesternDataLayer() {
    dataLayer.push({
        event: "ga.custom_event",
        "custom.category": "bradesco_cambio",
        "custom.action": "convenio_western_union",
        "custom.label": "remessas_via_western_union",
    });
}

function recebimentoDataLayer() {
    dataLayer.push({
        event: "ga.custom_event",
        "custom.category": "bradesco_cambio",
        "custom.action": "convenio_western_union",
        "custom.label": "recebimento",
    });
}

function comoFuncionaDataLayer() {
    dataLayer.push({
        event: "ga.custom_event",
        "custom.category": "bradesco_cambio",
        "custom.action": "convenio_western_union",
        "custom.label": "como_funciona",
    });
}
