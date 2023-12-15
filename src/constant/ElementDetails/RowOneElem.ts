import ElementDetailsProps from "@/types/ElementTypes";

export const RowOneElem: ElementDetailsProps[] = [
  {
    id: 1,
    neighbour: ["Oganesson", "Helium"],
    description:
      "Hydrogen is the lightest and, the simplest element and with a ratio of 80%, it is the main ingridient in the observable universe. 20% consist of Helium, the ratio of the heavier elements is below 1%. Most of the stars including our sun, generates energy by fusion of hydrogen to helium. Hydrogen is quiet abundant in earth too, opposite to helium, because it is very reactive elemnet and so is part of many different compounds.",
    general_properties: {
      name: "Hydrogen",
      atomic_number: 1,
      group: 1,
      period: 1,
      block: "S",
      cas_number: "1333-74-0",
      cid_number: "783",
      symbol: "H",
      allotropes: [
        [
          "Ortho-Hydrogen",
          "https://en.wikipedia.org/wiki/Spin_isomers_of_hydrogen",
        ],
        [
          "Para-Hydrogen",
          "https://en.wikipedia.org/wiki/Spin_isomers_of_hydrogen",
        ],
        ["Mono-atomic Hydrogen",''],
        ["Di-atomic Hydrogen",''],
      ],
    },
    particles: {
      electrons: 1,
      protons: 1,
      neutrons: 1,
    },
    overview: {
      latin_name: "Hydrogenium",
      discovery: 1766,
      discoverer: [["Henry Cavendish", "Henry_Cavendish"]],
    },
    atomic_properties: {
      atomic_weight: 1.008,
      oxidation_states: [-1, +1],
      electron_shell_configuration: "K1",
      electron_configuration: "1s<sup>1</sup>",
      gas_atom_multiplicities: 2,
      atomic_radius: 53,
      covalent_radius: 31,
      van_der_walls_radius: 120,
    },
    thermodynamic_properties: {
      boiling_point: "-252.87℃",
      melting_point: "-259.17℃",
      phase: "Gas",
      fusion_heat: 0.558,
      specific_heat: 14300,
      vaporization_heat: 0.452,
      adiabatic_index: 7 / 5,
    },
    material_properties: {
      color: "Colorless",
      molar_volume: "1.12•10<sup>-2</sup>",
      refrective_index: 1.000132,
      sound_speed: 1270,
      thermal_conductivity: 0.1805,
    },
    reactivity: {
      electronegativity: 2.2,
      valence: 1,
      electron_affinity: 72.8,
      ionization_energy: 1312,
    },
    neuclear_properties: {
      radioactive: "No",
      half_life: "∞",
      lifetime: "∞",
      neutron_cross_section: 0.332,
      neutron_mass_absorption: 0.011,
      quantum_numbers: "<sup>2</sup>S<sub>1/2</sub>",
      isotopes: [1, 2, 3, 4, 5, 6, 7],
      stable: [1, 2],
    },
    electromagnetic_properties: {
      magnetic_type: "Diamagnetic",
      volume_magnetic_suspectibility: "-2.23•10<sup>-9</sup>",
      mass_magnetic_suspectibility: "-2.48•10<sup>-9</sup>",
      molar_magnetic_suspectibility: "-4.99•10<sup>-9</sup>",
    },
    prevalence: {
      universe: "75.00%",
      sun: "75.00%",
      ocean: "11%",
      human: "10%",
      earth_crust: "0.15%",
      meteorites: "2%",
    },
    external_links: {
      wikipedia: "https://en.wikipedia.org/wiki/Hydrogen",
      youtube: "https://youtu.be/U-MNKK20Z_g",
    },
    health_safety: {
      Hazard_class: 2.1,
      dot_number: 1966,
      rtecs_number: "MW8900000",
      nfpa_label: "/H.png"
    },
    atom_structure: {
      crystal_structure: "Simple Hexagonal",
      lattice_angle: [90, 90, 120],
      lattice_constant: [470, 470, 340],
      space_group_name: "P6<sub>3</sub>/mmc",
      space_group_number: 194,
    },
  },
  {
    id: 2,
    neighbour: ["Hydrogen", "Lithium"],
    description:
      "About 20% of the visible matter in the universe is helium, but because it is so light and does not react chemically with anything, it escaped from earth into space, when the solar system was young. So now it is quite rare here. Nonetheless it has multiple applications, from making balloons fly to coolingthings to extremely low temperatures with liquid helium.",
    general_properties: {
      name: "Helium",
      atomic_number: 2,
      group: 18,
      period: 1,
      block: "P",
      cas_number: "7440-59-7",
      cid_number: "23987",
      symbol: "He",
    },
    particles: {
      electrons: 2,
      protons: 2,
      neutrons: 2,
    },
    overview: {
      latin_name: "Helium",
      discovery: 1868,
      discoverer: [
        ["Sir Edward Frankland", "Edward_Frankland"],
        ["Pierre Janssen", "Pierre_Janssen"],
        ["Normal Lockver", "Normal_Lockver"],
      ],
    },
    atomic_properties: {
      atomic_weight: 4.002602,
      oxidation_states: [0],
      electron_shell_configuration: "K2",
      electron_configuration: "1s<sup>2</sup>",
      gas_atom_multiplicities: 1,
      atomic_radius: 31,
      covalent_radius: 28,
      van_der_walls_radius: 140,
    },
    thermodynamic_properties: {
      boiling_point: "-268.93℃",
      melting_point: "-272℃",
      phase: "Gas",
      fusion_heat: 0.02,
      specific_heat: 5193.1,
      vaporization_heat: 0.083,
      adiabatic_index: 1.67,
    },
    material_properties: {
      color: "Colorless",
      molar_volume: "2.242•10<sup>-2</sup>",
      refrective_index: 1.000035,
      sound_speed: 970,
      thermal_conductivity: 0.1513,
    },
    reactivity: {
      valence: 0,
      ionization_energy: 1312,
    },
    neuclear_properties: {
      radioactive: "No",
      half_life: "∞",
      lifetime: "∞",
      neutron_cross_section: 0.007,
      neutron_mass_absorption: 0.00001,
      quantum_numbers: "<sup>1</sup>S<sub>0</sub>",
      isotopes: [2, 3, 4, 5, 6, 7, 8, 9, 10],
      stable: [3, 4],
    },
    electromagnetic_properties: {
      magnetic_type: "Diamagnetic",
      volume_magnetic_suspectibility: "-1.05•10<sup>-9</sup>",
      mass_magnetic_suspectibility: "-5.9•10<sup>-9</sup>",
      molar_magnetic_suspectibility: "-2.36•10<sup>-11</sup>",
    },
    prevalence: {
      universe: "23.00%",
      sun: "23.00%",
      ocean: "7.3•10<sup>-10</sup>%",
      human: "0%",
      earth_crust: "5.5•10<sup>-7</sup>%",
      meteorites: "0%",
    },
    external_links: {
      wikipedia: "https://en.wikipedia.org/wiki/Helium",
      youtube: "https://youtu.be/ntyh9VJvq2w",
    },
    health_safety: {
      Hazard_class: 2.2,
      dot_number: 1963,
      rtecs_number: "MH6520000",
      nfpa_label: "/He.png"
    },
    atom_structure: {
      crystal_structure: "Face-Centered Cubic (FCC)",
      lattice_angle: [90, 90, 90],
      lattice_constant: [424.2, 424.2, 424.2],
      space_group_name: "Fm_ 3m",
      space_group_number: 225,
    },
  },
];