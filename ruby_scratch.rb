class Fish
    attr_accessor :name,:color,:species,:appetite_level
    
    def initialize(name,color,species)
        @name = name
        @color = color
        @species = species
        @appetite_level = 10
    end
end